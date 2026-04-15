import re

with open('src/components/ProjectsSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the card block
# The key identifiers: class with h-full transition-transform hover:-translate-y-1 onClick
old_marker = 'className="minimal-card-accent group cursor-pointer h-full transition-transform hover:-translate-y-1"'
new_marker = 'className="minimal-card-accent group cursor-pointer flex flex-col h-full"'

if old_marker not in content:
    print('ERROR: old_marker not found. Check file content.')
    # print relevant lines
    lines = content.split('\n')
    for i, line in enumerate(lines[400:415], 401):
        print(f'{i}: {repr(line)}')
else:
    content = content.replace(old_marker, new_marker, 1)
    print('Step 1 done: class updated')

# Now add the style, onMouseEnter, onMouseLeave props after the onClick
# The current onClick line looks like:
#   onClick={() => setSelectedProject(project)}
# Followed by >
old_click = '                onClick={() => setSelectedProject(project)}\n              >'
new_click = (
    '                style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease" }}\n'
    '                onClick={() => setSelectedProject(project)}\n'
    '                onMouseEnter={(e) => {\n'
    '                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";\n'
    '                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.13), 0 0 0 1px hsl(220 70% 50% / 0.15)";\n'
    '                }}\n'
    '                onMouseLeave={(e) => {\n'
    '                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";\n'
    '                  (e.currentTarget as HTMLElement).style.boxShadow = "";\n'
    '                }}\n'
    '              >'
)

if old_click not in content:
    print('ERROR: old_click not found')
    lines = content.split('\n')
    for i, line in enumerate(lines[403:410], 404):
        print(f'{i}: {repr(line)}')
else:
    content = content.replace(old_click, new_click, 1)
    print('Step 2 done: mouse events added')

# Update ArrowUpRight size and strokeWidth
old_arrow = '<ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />'
new_arrow = '<ArrowUpRight size={20} strokeWidth={2.5} className="text-muted-foreground group-hover:text-primary transition-colors" />'

if old_arrow not in content:
    print('ERROR: old_arrow not found')
else:
    content = content.replace(old_arrow, new_arrow, 1)
    print('Step 3 done: ArrowUpRight updated')

# Update the content div to flex-col flex-1 justify-between
old_content_div = '                <div className="p-8 pt-5">'
new_content_div = '                <div className="p-8 pt-5 flex flex-col flex-1 justify-between">'

if old_content_div not in content:
    print('ERROR: old_content_div not found')
else:
    content = content.replace(old_content_div, new_content_div, 1)
    print('Step 4 done: content div updated')

# Wrap highlights and tags in a <div> to achieve justify-between
old_highlights_start = '                  {/* Highlights */}'
new_highlights_start = '                  <div>\n                    {/* Highlights */}'

if old_highlights_start not in content:
    print('ERROR: old_highlights_start not found')
else:
    content = content.replace(old_highlights_start, new_highlights_start, 1)
    print('Step 5 done: opening wrapper div added')

# Change "tag" class to "tech-tag" and close the wrapper div after tags section
old_tags_end = (
    '                  {/* Tags */}\n'
    '                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">\n'
    '                    {project.tags.map((tag) => (\n'
    '                      <span key={tag} className="tag">{tag}</span>\n'
    '                    ))}\n'
    '                  </div>\n'
    '                </div>'
)
new_tags_end = (
    '                    {/* Tags - static, non-clickable */}\n'
    '                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">\n'
    '                      {project.tags.map((tag) => (\n'
    '                        <span key={tag} className="tech-tag">{tag}</span>\n'
    '                      ))}\n'
    '                    </div>\n'
    '                  </div>\n'
    '                </div>'
)

if old_tags_end not in content:
    print('ERROR: old_tags_end not found')
    # show relevant area
    idx = content.find('/* Tags */')
    if idx >= 0:
        print('Found Tags comment at index', idx)
        print(repr(content[idx:idx+300]))
else:
    content = content.replace(old_tags_end, new_tags_end, 1)
    print('Step 6 done: tags updated to tech-tag and wrapper closed')

with open('src/components/ProjectsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('DONE: File written successfully')
