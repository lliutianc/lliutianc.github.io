// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "The most up-to-date list can be found on my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-mitigating-heterogeneous-token-overfitting-in-llm-knowledge-editing-was-accepted-at-icml-25",
          title: 'Our paper “Mitigating Heterogeneous Token Overfitting in LLM Knowledge Editing” was accepted at...',
          description: "",
          section: "News",},{id: "news-our-paper-beyond-invisibility-learning-robust-visible-watermarks-for-stronger-copyright-protection-was-accepted-at-uai-25",
          title: 'Our paper “Beyond Invisibility: Learning Robust Visible Watermarks for Stronger Copyright Protection” was...',
          description: "",
          section: "News",},{id: "news-our-paper-ram-hand-robust-acoustic-multi-hand-pose-reconstruction-using-a-microphone-array-won-best-paper-award-at-sensys-25",
          title: 'Our paper “RAM-Hand: Robust Acoustic Multi-Hand Pose Reconstruction Using a Microphone Array” won...',
          description: "",
          section: "News",},{id: "news-our-paper-roserag-robust-retrieval-augmented-generation-with-small-scale-llms-via-margin-aware-preference-optimization-was-accepted-at-acl-25-findings",
          title: 'Our paper “RoseRAG: Robust Retrieval-augmented Generation with Small-scale LLMs via Margin-aware Preference Optimization”...',
          description: "",
          section: "News",},{id: "news-our-paper-towards-universal-debiasing-for-language-models-based-tabular-data-generation-and-learning-to-instruct-fine-tuning-a-task-aware-instruction-optimizer-for-black-box-llms-were-accepted-at-emnlp-25-findings",
          title: 'Our paper “Towards Universal Debiasing for Language Models-based Tabular Data Generation” and “Learning...',
          description: "",
          section: "News",},{id: "news-our-paper-toward-multimodal-general-purpose-and-generalizable-knowledge-editing-for-foundation-models-was-accepted-at-icdm-25-bluesky-track",
          title: 'Our paper “Toward Multimodal, General-Purpose, and Generalizable Knowledge Editing for Foundation Models” was...',
          description: "",
          section: "News",},{id: "news-our-paper-peanut-parameter-efficient-adaptation-with-weight-aware-neural-tweakers-was-accepted-at-kdd-26-research-track",
          title: 'Our paper “PEANuT: Parameter-Efficient Adaptation with Weight-aware Neural Tweakers” was accepted at KDD’26...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
