# limpa um arquivo de texto, mantendo apenas palavras de 5 letras
# esse codigo foi feito usando chatGPT
# Caminho para o arquivo de entrada
from unidecode import unidecode
entrada = "palavras.txt"
# Caminho para o arquivo de saída
saida = "termos.txt"

# Abrir, filtrar e salvar
with open(entrada, "r", encoding="utf-8") as arq:
    palavras = arq.readlines()

# Limpeza: tirar espaços, manter só palavras de 5 letras e alfabéticas
palavras_filtradas = []
for palavra in palavras:
    limpa = palavra.strip().lower()
    if len(limpa) == 5 and limpa.isalpha():
        palavras_filtradas.append(unidecode(limpa))

# Salvar no novo arquivo
with open(saida, "w", encoding="utf-8") as f:
    for palavra in sorted(set(palavras_filtradas)):
        f.write(palavra + "\n")

print(f"{len(palavras_filtradas)} palavras salvas em {saida}")
