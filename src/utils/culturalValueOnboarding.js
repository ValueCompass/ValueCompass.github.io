import onboardingPreview from "@/assets/images/Collaborators.png";
import onboardingVideoStep1 from "@/assets/CulturalAnnotation/English/Part 1.mp4";
import onboardingVideoStep2 from "@/assets/CulturalAnnotation/English/Part 2.mp4";
import onboardingVideoStep3 from "@/assets/CulturalAnnotation/English/Part 3.mp4";
import annotationSlidesPart1 from "@/assets/CulturalAnnotation/English/Human Annotation Guideline Video - Part 1.pptx";
import annotationSlidesPart2 from "@/assets/CulturalAnnotation/English/Human Annotation Guideline Video - Part 2.pptx";
import annotationSlidesPart3 from "@/assets/CulturalAnnotation/English/Human Annotation Guideline Video - Part 3.pptx";
import annotationGuidelineDocument from "@/assets/CulturalAnnotation/English/Human Annotation Guidelines v3 - English.docx";
import onboardingVideoStep1Chinese from "@/assets/CulturalAnnotation/Chinese/Part 1 - Chinese.mp4";
import onboardingVideoStep2Chinese from "@/assets/CulturalAnnotation/Chinese/Part 2 - Chinese.mp4";
import onboardingVideoStep3Chinese from "@/assets/CulturalAnnotation/Chinese/Part 3 - Chinese.mp4";
import annotationSlidesPart1Chinese from "@/assets/CulturalAnnotation/Chinese/Human Annotation Guideline Video - Part 1 - Chinese.pptx";
import annotationSlidesPart2Chinese from "@/assets/CulturalAnnotation/Chinese/Human Annotation Guideline Video - Part 2.pptx";
import annotationSlidesPart3Chinese from "@/assets/CulturalAnnotation/Chinese/Human Annotation Guideline Video - Part 3 - Chinese.pptx";
import annotationGuidelineDocumentChinese from "@/assets/CulturalAnnotation/Chinese/Human Annotation Guidelines v3 - China.docx";

export { onboardingPreview };

const onboardingResourceMap = {
  English: {
    videos: [
      onboardingVideoStep1,
      onboardingVideoStep2,
      onboardingVideoStep3,
    ],
    slides: [
      {
        url: annotationSlidesPart1,
        fileName: "Human Annotation Guideline Video - Part 1.pptx",
      },
      {
        url: annotationSlidesPart2,
        fileName: "Human Annotation Guideline Video - Part 2.pptx",
      },
      {
        url: annotationSlidesPart3,
        fileName: "Human Annotation Guideline Video - Part 3.pptx",
      },
    ],
    guidelineDocument: {
      url: annotationGuidelineDocument,
      fileName: "Human Annotation Guidelines v3 - English.docx",
    },
  },
  Chinese: {
    videos: [
      "https://chinese-training-video-1258865474.cos.ap-beijing.myqcloud.com/Part%201%20-%20Chinese.mp4",
      "https://chinese-training-video-1258865474.cos.ap-beijing.myqcloud.com/Part%202%20-%20Chinese.mp4",
      "https://chinese-training-video-1258865474.cos.ap-beijing.myqcloud.com/Part%203%20-%20Chinese.mp4",
    ],
    slides: [
      {
        url: annotationSlidesPart1Chinese,
        fileName: "Human Annotation Guideline Video - Part 1 - Chinese.pptx",
      },
      {
        url: annotationSlidesPart2Chinese,
        fileName: "Human Annotation Guideline Video - Part 2.pptx",
      },
      {
        url: annotationSlidesPart3Chinese,
        fileName: "Human Annotation Guideline Video - Part 3 - Chinese.pptx",
      },
    ],
    guidelineDocument: {
      url: annotationGuidelineDocumentChinese,
      fileName: "Human Annotation Guidelines v3 - China.docx",
    },
  },
};

const normalizeOnboardingResourceLanguage = (language = "") => {
  return String(language).trim().toLowerCase() === "chinese"
    ? "Chinese"
    : "English";
};

const getOnboardingResourceSet = (language = "") => {
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

export const createOnboardingSteps = ({ completed = false } = {}) => {
  const { language } = getStoredOnboardingUserDetail();
  const resourceSet = getOnboardingResourceSet(language);

  return [
    {
      id: 1,
      label: "Step 1",
      pill: "Step 1. Task Overview & Objectives",
      heading: "Get to Know the Task",
      description:
        "Understand the workflow and purpose of the annotation system.",
      completed,
      videoSrc: resourceSet.videos[0],
      videoType: "video/mp4",
    },
    {
      id: 2,
      label: "Step 2",
      pill: "Step 2. Key Guidelines & How to Annotate",
      heading: "Learn the Annotation Rules",
      description:
        "Learn rules and criteria to ensure consistent, reliable annotations.",
      completed,
      videoSrc: resourceSet.videos[1],
      videoType: "video/mp4",
    },
    {
      id: 3,
      label: "Step 3",
      pill: "Step 3. Real Cases & Best Practices",
      heading: "Examples & Practical",
      description:
        "See real examples to reinforce understanding and apply in practice.",
      completed,
      videoSrc: resourceSet.videos[2],
      videoType: "video/mp4",
    },
  ];
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
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNUE4QklKTjZaMFNaSE5JSEFYNlNZTkZMNi4u",
        },
        {
          label: "Chinese",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxURVFPVVJHTFMzTzZKWlFURUxWMjBNSUJLSy4u",
        },
        {
          label: "Japanese",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUQUZBUjRVMlZGT0EyVTBTVDdOVVc3RTc3Ti4u",
        },
        {
          label: "Korean",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxURjQwWlNZVFlKSjZXTjAwTzlESFFWR1oxVy4u",
        },
      ],
    },
    {
      title: "Cultural Value Survey:",
      completed: false,
      links: [
        {
          label: "English;",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNFEyTzhORDM2RktBRTRUNjFWSTZWSzdDMC4u",
        },
        {
          label: "Chinese;",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUMEtSTkI3VEkwMEc3STRQTkhKRk41UTJPRS4u",
        },
        {
          label: "Japanese;",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxURUZWNEQ5TDZFVVFHODRZVFU2WVpDWjQ4WC4u",
        },
        {
          label: "Korean",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-pAHAm2aJ5JuuKZp_7_rMxUNVc1RTVFQjBSVlNIRTNRT0Q5VzhJV0o1RC4u",
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

export const downloadOnboardingSlides = () => {
  const { language } = getStoredOnboardingUserDetail();
  const resourceSet = getOnboardingResourceSet(language);

  resourceSet.slides.forEach((file, index) => {
    window.setTimeout(() => {
      triggerFileDownload(file.url, file.fileName);
    }, index * 150);
  });
};

export const downloadOnboardingGuidelineDocument = () => {
  const { language } = getStoredOnboardingUserDetail();
  const resourceSet = getOnboardingResourceSet(language);

  triggerFileDownload(
    resourceSet.guidelineDocument.url,
    resourceSet.guidelineDocument.fileName,
  );
};