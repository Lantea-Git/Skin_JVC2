import glob
import os

# -------- SELECT MASTER --------

master_files = glob.glob("MASTER_*.css")
if not master_files:
    raise RuntimeError("No master file found")

MASTER_FILE = max(master_files, key=os.path.getmtime)
print(f"Using master: {MASTER_FILE}")

# -------- LOAD MASTER --------

parts = {}
current_part = None
buffer = []
author = None
versions = {}

with open(MASTER_FILE, encoding="utf-8") as f:
    for line in f:
        stripped = line.strip()

        if stripped.startswith("/* VERSION [["):
            name = stripped.split("[[")[1].split("]]")[0]
            value_bump = stripped.split(":")[1].replace("*/", "").strip()
            versions[name] = value_bump

        elif stripped.startswith("/* Author:"):
            author = stripped.replace("/* Author:", "").replace("*/", "").strip()

        elif stripped.startswith("/* PART START: [["):
            current_part = stripped.replace("/* PART START: [[", "").replace("]] */", "").strip()
            buffer = []

        elif stripped == "/* PART END */":
            if current_part is None:
                raise RuntimeError("PART END without PART START")
            parts[current_part] = "".join(buffer)
            current_part = None

        elif current_part:
            buffer.append(line)

if not author:
    raise RuntimeError("AUTHOR not found in master")

# -------- BUILD --------

templates = glob.glob("*.template.*")

for template in templates:
    with open(template, encoding="utf-8") as f:
        lines = f.readlines()

    output = []

    for line in lines:
        stripped = line.strip()

        if stripped.startswith("/* IMPORT MASTER [["):
            part_name = stripped.replace("/* IMPORT MASTER [[", "").replace("]] */", "").strip()

            if part_name not in parts:
                raise RuntimeError(f"Unknown PART '{part_name}'")

            output.append(parts[part_name])
        else:
            output.append(line)

    content = "".join(output)
    for name, value in versions.items():
        version_obj = "{{VERSION_" + name + "}}"
        content = content.replace(version_obj, value)
    content = content.replace("{{MASTER_AUTHOR}}", author)

    out_name = template.replace(".template.js", ".js")
    out_name = out_name.replace(".template.css", ".user.css")
    out_path = f"{out_name}"

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"✔ Built {out_name}")
