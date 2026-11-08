# francescopinto02.github.io

Sito personale di **Francesco Alessandro Pinto**, realizzato con Jekyll e pubblicato con GitHub Pages.

🌐 https://francescopinto02.github.io

## Dove modificare i contenuti

Tutti i contenuti stanno in `_config.yml` e nei file YAML in `_data/`, quindi per aggiornarli non serve toccare l'HTML.

| Cosa                                   | File                                   |
|----------------------------------------|----------------------------------------|
| Nome, ruolo, foto, CV, link social     | `_config.yml`                          |
| Bio (pagina About)                     | `index.md`                             |
| Box "Currently"                        | `_data/currently.yml`                  |
| Research Interests                     | `_data/interests.yml`                  |
| News                                   | `_data/news.yml`                       |
| Education (con il PDF della tesi)      | `_data/education.yml`                  |
| Papers                                 | `_data/papers.yml`                     |
| Projects                               | `_data/projects.yml`                   |
| Hobbies                                | `_data/hobbies.yml`                    |
| Voci del menu                          | `_data/navigation.yml`                 |
| PDF (CV, tesi)                         | `assets/files/`                        |
| Colori (tema chiaro e scuro)           | variabili in cima a `assets/css/style.css` |

Le icone sono di [Font Awesome 6 Free](https://fontawesome.com/search?o=r&m=free).

## Anteprima in locale

Serve Ruby installato.

```bash
bundle install
bundle exec jekyll serve
```

Poi apri http://localhost:4000. Le modifiche si vedono ricaricando la pagina, tranne quelle a `_config.yml`: per quelle bisogna riavviare il server.
