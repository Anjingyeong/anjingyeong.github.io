with open("src/components/ProjectsSection.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()
del lines[364:551]
with open("src/components/ProjectsSection.tsx", "w", encoding="utf-8") as f:
    f.writelines(lines)
