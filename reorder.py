path = r'c:\Users\user\.gemini\antigravity\scratch\developer-portfolio\src\components\ProjectsSection.tsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = lines[:17] + lines[172:218] + lines[111:172] + lines[17:111] + lines[218:]

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
