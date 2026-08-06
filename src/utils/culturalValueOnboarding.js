import onboardingPreview from "@/assets/images/Collaborators.png";
import onboardingTrainingVideo from "@/assets/CulturalAnnotation/English/Part.mp4";
import koreanOnboardingTrainingVideo from "@/assets/CulturalAnnotation/Korean/Part.mp4";

export { onboardingPreview };

const onboardingResourceMap = {
  English: {
    steps: [
      {
        id: 1,
        label: "Step 1",
        pill: "Step 1. Learn How to Annotate",
        heading: "Learn How to Annotate",
        description:
          "This section explains the project background and clarifies values, cultural values, and personal vs. cultural perspectives.",
        videoSrc: onboardingTrainingVideo,
        videoType: "video/mp4",
      },
    ],
    guidelineDocument: {
      url: new URL(
        "../assets/CulturalAnnotation/English/Human Annotation Guidelines v4 - English.docx",
        import.meta.url,
      ).href,
      fileName: "Human Annotation Guidelines v4 - English.docx",
    },
  },
  Chinese: {
    steps: [
      {
        id: 1,
        label: "Step 1",
        pill: "Step 1. Learn How to Annotate",
        heading: "Learn How to Annotate",
        description:
          "This section explains the project background and clarifies values, cultural values, and personal vs. cultural perspectives.",
        videoSrc:
          "https://training-video-1258865474.cos.ap-beijing.myqcloud.com/Training%20Video%20-%20CN%20-%20Marked.mp4",
        videoType: "video/mp4",
      },
    ],
    guidelineDocument: {
      url: new URL(
        "../assets/CulturalAnnotation/Chinese/Human Annotation Guidelines v4 - China.docx",
        import.meta.url,
      ).href,
      fileName: "Human Annotation Guidelines v4 - China.docx",
    },
  },
  Japanese: {
    steps: [
      {
        id: 1,
        label: "Step 1",
        pill: "Step 1. Learn How to Annotate",
        heading: "Learn How to Annotate",
        description:
          "This section explains the project background and clarifies values, cultural values, and personal vs. cultural perspectives.",
        videoSrc: onboardingTrainingVideo,
        videoType: "video/mp4",
      },
    ],
    guidelineDocument: {
      url: new URL(
        "../assets/CulturalAnnotation/Japanese/Human Annotation Guidelines v4 - Japanese.docx",
        import.meta.url,
      ).href,
      fileName: "Human Annotation Guidelines v4 - Japanese.docx",
    },
  },
  Korean: {
    steps: [
      {
        id: 1,
        label: "Step 1",
        pill: "Step 1. Learn How to Annotate",
        heading: "Learn How to Annotate",
        description:
          "This section explains the project background and clarifies values, cultural values, and personal vs. cultural perspectives.",
        videoSrc: koreanOnboardingTrainingVideo,
        videoType: "video/mp4",
      },
    ],
    guidelineDocument: {
      url: new URL(
        "../assets/CulturalAnnotation/Korean/Human Annotation Guidelines v4 - Korean.docx",
        import.meta.url,
      ).href,
      fileName: "Human Annotation Guidelines v4 - Korean.docx",
    },
  },
};

const normalizeOnboardingResourceLanguage = (language = "") => {
  const normalizedLanguage = String(language).trim().toLowerCase();

  if (normalizedLanguage === "chinese") {
    return "Chinese";
  }

  if (normalizedLanguage === "japanese") {
    return "Japanese";
  }

  if (normalizedLanguage === "korean") {
    return "Korean";
  }

  return "English";
};

export const getOnboardingResourceSet = (language = "") => {
  const resourceLanguage = normalizeOnboardingResourceLanguage(language);
  return onboardingResourceMap[resourceLanguage] || onboardingResourceMap.English;
};

export const countryLanguageMap = {
  China: "Chinese",
  Japan: "Japanese",
  "South Korea": "Korean",
  Korea: "Korean",
  "Republic of Korea": "Korean",
};

export const createOnboardingSurveys = () => {
  return [
    {
      title: "Basic Information Survey:",
      completed: false,
      links: [
        {
          label: "English",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNkZGTUdYQkZNTDBWVjI0WTBFUDZCMTMzOC4u",
        },
        {
          label: "Chinese",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNDZDVE04MFNXTVE2SUdHN09WSzRBRTVXSS4u",
        },
        {
          label: "Japanese",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUQ0o5NFE3RjFRTTFKOVpYTUNPT0pMMkhRWi4u",
        },
        {
          label: "Korean",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxURjRENlJCUDJLVUFMSVVNSU9NTUdES1E4Vi4u",
        },
      ],
    },
    {
      title: "Schwartz Value Survey:",
      completed: false,
      links: [
        {
          label: "English",
          href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUMUc1UDJFOUhHUjNRVzFXUlVDWFM5NDJJSi4u",
        },
        {
          label: "Chinese",
          href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUODlKN1oyV0xPQkdGNjg4TVdXUDZPRlgwUi4u",
        },
        {
          label: "Japanese",
          href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUREhKRDU0SVFQNVlDSUIyQjQxWkIyWEM2Si4u",
        },
        {
          label: "Korean",
          href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNEpUNFFUQTRYNkQ3NFpQRzBIV1BUQTRLSS4u",
        },
      ],
    },
    {
      title: "Cultural Value Survey:",
      completed: false,
      links: [
        {
          label: "English;",
          href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUQjlCRUJUSEg0NlRWR0E2SkdSMlpYSFJSTC4u",
        },
        {
          label: "Chinese;",
          href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNUozUFZFWkhVTlFTSzdMNEpNQzkzMFVHOS4u",
        },
        {
          label: "Japanese;",
          href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUMFdKMDkySEhFS1M0WElVVUxWMDk5UUVRSS4u",
        },
        {
          label: "Korean",
          href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxURUMwMUs0SU5SVDJFQjdLTERJVUU2UlQ0SS4u",
        },
      ],
    },
  ];
};

export const normalizeLanguageLabel = (label = "") => {
  return label.replace(/;$/, "").trim();
};

export const getPreferredSurveyLanguage = ({
  country = "",
  language = "",
  preferRegisteredLanguage = true,
} = {}) => {
  return (
    (preferRegisteredLanguage ? language : "") ||
    countryLanguageMap[country] ||
    "English"
  );
};

export const buildDisplaySurveys = ({
  surveys,
  preferredLanguage,
  surveyLinksExpanded,
}) => {
  return surveys.map((survey) => {
    const links = [...survey.links].sort((left, right) => {
      const leftIsPreferred =
        normalizeLanguageLabel(left.label) === preferredLanguage;
      const rightIsPreferred =
        normalizeLanguageLabel(right.label) === preferredLanguage;

      if (leftIsPreferred === rightIsPreferred) {
        return 0;
      }

      return leftIsPreferred ? -1 : 1;
    });

    const preferredLink = links.find((link) => {
      return normalizeLanguageLabel(link.label) === preferredLanguage;
    });

    return {
      survey,
      links,
      visibleLinks: surveyLinksExpanded
        ? links
        : preferredLink
          ? [preferredLink]
          : links.slice(0, 1),
      canExpand: links.length > 1,
    };
  });
};

export const getStoredOnboardingUserDetail = () => {
  try {
    const storedUserDetail = JSON.parse(
      localStorage.getItem("userDetail") || "{}",
    );

    return {
      username: storedUserDetail.username?.trim() || "hua",
      country: storedUserDetail.country?.trim() || "",
      language: storedUserDetail.language?.trim() || "",
    };
  } catch {
    return {
      username: "hua",
      country: "",
      language: "",
    };
  }
};

export const copyTextWithFallback = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "true");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    return true;
  }
};

const triggerFileDownload = (url, fileName) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.target = "_blank";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadOnboardingGuidelineDocument = () => {
  const { language } = getStoredOnboardingUserDetail();
  const resourceSet = getOnboardingResourceSet(language);

  triggerFileDownload(
    resourceSet.guidelineDocument.url,
    resourceSet.guidelineDocument.fileName,
  );
};