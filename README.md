# 🚀 Portfólio Aldenir dos Santos

Um portfólio profissional moderno e responsivo desenvolvido com React, apresentando habilidades, projetos e informações de contato de forma elegante e interativa.

## ✨ Características

- **Design Moderno**: Interface elegante com gradientes e efeitos de vidro (glassmorphism)
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Animações Suaves**: Animações fluidas usando Framer Motion
- **Navegação Intuitiva**: Menu de navegação fixo com scroll suave
- **Seções Completas**: Hero, Sobre, Habilidades, Projetos, Contato e Footer
- **Formulário de Contato**: Formulário funcional com validação
- **Filtros de Projetos**: Sistema de filtros para categorizar projetos
- **Barras de Progresso**: Visualização interativa das habilidades
- **Ícones Modernos**: Ícones do React Icons
- **Performance Otimizada**: Carregamento rápido e eficiente

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Framer Motion** - Animações e transições
- **React Icons** - Ícones modernos
- **CSS3** - Estilização avançada com Grid e Flexbox
- **HTML5** - Estrutura semântica

## 📦 Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/takeshi-portfolio.git
   cd takeshi-portfolio
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   ```bash
   npm start
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Header.js          # Navegação principal
│   ├── Hero.js           # Seção de apresentação
│   ├── About.js          # Informações sobre
│   ├── Skills.js         # Habilidades técnicas
│   ├── Projects.js       # Portfólio de projetos
│   ├── Contact.js        # Formulário de contato
│   ├── Footer.js         # Rodapé
│   └── *.css             # Estilos dos componentes
├── App.js                # Componente principal
├── App.css              # Estilos globais
├── index.js             # Ponto de entrada
└── index.css            # Reset CSS
```

## 🎨 Personalização

### Cores e Tema

As cores principais estão definidas no arquivo `src/App.css`:

- **Cor primária**: `#00d4ff` (azul ciano)
- **Cor secundária**: `#0099cc` (azul escuro)
- **Fundo**: Gradientes escuros com transparências

### Conteúdo

Edite os componentes para personalizar:

- **Informações pessoais**: `Hero.js`, `About.js`
- **Habilidades**: `Skills.js` - array `skillCategories`
- **Projetos**: `Projects.js` - array `projects`
- **Contato**: `Contact.js` - arrays `contactInfo` e `socialLinks`

### Imagens

- Substitua as imagens placeholder nos projetos
- Adicione sua foto de perfil no componente Hero
- Personalize o favicon em `public/`

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Mobile pequeno**: < 480px

## 🚀 Deploy

### Netlify (Recomendado)

1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `build`

### Vercel

1. Conecte seu repositório ao Vercel
2. O deploy será automático

### GitHub Pages

```bash
npm run build
npm install -g gh-pages
gh-pages -d build
```

<!--
## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. -->

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📞 Contato

- **Email**: aldenirtakeshi@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/aldenir-dos-santos-060a51300/
- **GitHub**: https://github.com/AldenirTakeshi

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
