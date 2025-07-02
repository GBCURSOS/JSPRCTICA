#!/usr/bin/env python3
import re

def format_js_code(code):
    """Formatea código JavaScript básico"""
    # Reemplazar múltiples espacios con uno solo
    code = re.sub(r'\s+', ' ', code)
    
    # Formatear estructuras de control
    code = re.sub(r'for\s*\(\s*', 'for (', code)
    code = re.sub(r'if\s*\(\s*', 'if (', code)
    code = re.sub(r'while\s*\(\s*', 'while (', code)
    
    # Formatear operadores
    code = re.sub(r'\s*===\s*', ' === ', code)
    code = re.sub(r'\s*>=\s*', ' >= ', code)
    code = re.sub(r'\s*<=\s*', ' <= ', code)
    code = re.sub(r'\s*!=\s*', ' != ', code)
    code = re.sub(r'\s*\*=\s*', ' *= ', code)
    
    # Formatear llaves y puntos y coma
    code = re.sub(r'\s*{\s*', ' {\n    ', code)
    code = re.sub(r'\s*}\s*', '\n}\n', code)
    code = re.sub(r';\s*', ';\n', code)
    
    # Formatear líneas
    lines = code.split('\n')
    formatted_lines = []
    indent_level = 0
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Reducir indentación para llaves de cierre
        if line.startswith('}'):
            indent_level = max(0, indent_level - 1)
            
        # Aplicar indentación
        formatted_lines.append('    ' * indent_level + line)
        
        # Aumentar indentación después de llaves de apertura
        if line.endswith('{'):
            indent_level += 1
    
    return '\n'.join(formatted_lines)

# Leer el archivo
with open('TALLERES/HTML/taller10.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Patrón para encontrar áreas de código
pattern = r'(<div class="codigo-area">)(.*?)(</div>)'

def format_code_block(match):
    start_tag = match.group(1)
    code_content = match.group(2)
    end_tag = match.group(3)
    
    # Solo formatear si contiene código JavaScript
    if any(keyword in code_content for keyword in ['const', 'let', 'var', 'for', 'if', 'while']):
        formatted_code = format_js_code(code_content)
        return start_tag + formatted_code + end_tag
    
    return match.group(0)

# Aplicar el formateo
formatted_content = re.sub(pattern, format_code_block, content, flags=re.DOTALL)

# Escribir el archivo formateado
with open('TALLERES/HTML/taller10.html', 'w', encoding='utf-8') as f:
    f.write(formatted_content)

print("¡Formateo completado exitosamente!")
