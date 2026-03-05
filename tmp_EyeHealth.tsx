import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/EyeHealth.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=2e93afb6"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("E:/sixhealth e file/src/pages/EyeHealth.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
const _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=2e93afb6"; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"];
import { Layout } from "/src/components/layout/index.ts";
import PageLayout from "/src/components/layout/PageLayout.tsx";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=2e93afb6";
import { findArticleBySlug } from "/src/data/allArticles.ts";
const tabs = [
  "Eye Conditions",
  "Vision Problems",
  "Diagnosis",
  "Treatment",
  "Prevention",
  "Healthy Vision"
];
const sections = [
  {
    id: "diagnosis",
    title: "Eye Examination and Diagnosis",
    category: "Diagnosis",
    articles: [
      { id: "exam", title: "Eye Exam Basics", content: "What happens during checkupsâ¦" },
      { id: "acuity", title: "Vision Acuity Testing", content: "Measuring your eyesightâ¦" },
      { id: "oct", title: "Optical Coherence Tomography", content: "OCT imagingâ¦" },
      { id: "field", title: "Visual Field Testing", content: "Peripheral vision assessmentâ¦" },
      { id: "pressure", title: "Intraocular Pressure Measurement", content: "Glaucoma screeningâ¦" },
      { id: "dilated", title: "Dilated Eye Exam", content: "Examining the retinaâ¦" }
    ]
  },
  {
    id: "treatment",
    title: "Treatment Options",
    category: "Treatment",
    articles: [
      { id: "glasses", title: "Eyeglasses", content: "Optical correctionâ¦" },
      { id: "contacts", title: "Contact Lenses", content: "Advantages and careâ¦" },
      { id: "lasik", title: "LASIK and Refractive Surgery", content: "Corrective proceduresâ¦" },
      { id: "cataract", title: "Cataract Surgery", content: "Lens replacementâ¦" },
      { id: "glaucoma-meds", title: "Glaucoma Medications", content: "Eye drops and medicationsâ¦" },
      { id: "laser", title: "Laser and Injection Therapies", content: "Advanced treatmentsâ¦" }
    ]
  },
  {
    id: "prevention",
    title: "Eye Disease Prevention",
    category: "Prevention",
    articles: [
      { id: "uv", title: "UV Protection", content: "Sunglasses and sun safetyâ¦" },
      { id: "screen", title: "Screen Time and Eye Health", content: "Digital eye strainâ¦" },
      { id: "nutrition", title: "Nutrition for Eyes", content: "Vitamins and antioxidantsâ¦" },
      { id: "exercise", title: "Exercise and Vision", content: "Physical activity benefitsâ¦" },
      { id: "smoking", title: "Smoking Cessation", content: "Quitting for eye healthâ¦" },
      { id: "exams", title: "Regular Eye Exams", content: "Screening schedulesâ¦" }
    ]
  },
  {
    id: "healthy",
    title: "Maintaining Healthy Vision",
    category: "Healthy Vision",
    articles: [
      { id: "daily", title: "Daily Eye Care", content: "Hygiene and practicesâ¦" },
      { id: "lens-care", title: "Contact Lens Care", content: "Proper cleaning and storageâ¦" },
      { id: "cvs", title: "Computer Vision Syndrome", content: "Managing digital strainâ¦" },
      { id: "safety", title: "Safety Eyewear", content: "Protecting eyes from injuryâ¦" },
      { id: "meds", title: "Medication Side Effects", content: "Drugs affecting visionâ¦" },
      { id: "emergency", title: "When to Seek Emergency Care", content: "Urgent eye symptomsâ¦" }
    ]
  }
];
function Section({
  section
}) {
  return /* @__PURE__ */ jsxDEV("section", { children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-semibold mb-6", children: section.title }, void 0, false, {
      fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: section.articles.map((article) => {
      const gen = (article.id || article.title || "").toString();
      const found = findArticleBySlug(gen, "eye-health") || findArticleBySlug(article.title, "eye-health") || findArticleBySlug(gen) || findArticleBySlug(article.title);
      const targetCategory = found ? found.categorySlug || found.category : "eye-health";
      const targetSlug = found ? found.slug : (article.id || article.title).toString();
      return /* @__PURE__ */ jsxDEV(
        Link,
        {
          className: "border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none no-underline",
          to: `/conditions/${targetCategory}/article/${targetSlug}`,
          state: { title: found ? found.title : article.title },
          children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: "/health-placeholder.png",
                alt: article.title,
                className: "w-full h-36 object-cover rounded mb-3 bg-gray-100",
                loading: "lazy"
              },
              void 0,
              false,
              {
                fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
                lineNumber: 121,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold mb-2", children: article.title }, void 0, false, {
              fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
              lineNumber: 127,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-purple-700 text-sm font-semibold mt-auto", children: "Read more â" }, void 0, false, {
              fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
              lineNumber: 128,
              columnNumber: 13
            }, this)
          ]
        },
        article.id,
        true,
        {
          fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
          lineNumber: 115,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
_c = Section;
export default function EyeHealth() {
  _s();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = {
    "Eye Conditions": useRef(null),
    "Vision Problems": useRef(null),
    "Diagnosis": useRef(null),
    "Treatment": useRef(null),
    "Prevention": useRef(null),
    "Healthy Vision": useRef(null)
  };
  const scrollToSection = (category) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return /* @__PURE__ */ jsxDEV(Layout, { children: /* @__PURE__ */ jsxDEV(
    PageLayout,
    {
      title: "Eye Health",
      subtitle: "Comprehensive guide to eye diseases, vision problems, and maintaining healthy eyesight. Understanding common eye conditions and protecting your vision.",
      tabs,
      activeTab: null,
      onTabClick: scrollToSection,
      heroColor: "#2563eb",
      children: /* @__PURE__ */ jsxDEV("section", { className: "space-y-12", children: sections.map(
        (section) => /* @__PURE__ */ jsxDEV("div", { ref: sectionRefs[section.category], children: /* @__PURE__ */ jsxDEV(Section, { section }, void 0, false, {
          fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
          lineNumber: 172,
          columnNumber: 15
        }, this) }, section.id, false, {
          fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
      lineNumber: 161,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "E:/sixhealth e file/src/pages/EyeHealth.tsx",
    lineNumber: 160,
    columnNumber: 5
  }, this);
}
_s(EyeHealth, "6yyu6EW137Zfb8Xw94h0kwvB5cc=");
_c2 = EyeHealth;
let _c, _c2;
$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "EyeHealth");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("E:/sixhealth e file/src/pages/EyeHealth.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/sixhealth e file/src/pages/EyeHealth.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQSxNQUVWLGlDQUFDLGFBQVEsV0FBVSxjQUNoQnpCLG1CQUFTUTtBQUFBQSxRQUFJLENBQUNELFlBQ2IsdUJBQUMsU0FBcUIsS0FBS2lCLFlBQVlqQixRQUFRSixRQUFRLEdBQ3JELGlDQUFDLFdBQVEsV0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTBCLEtBRGxCSSxRQUFRTixJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxNQUNELEtBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVFBO0FBQUE7QUFBQSxJQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFpQkEsS0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW1CQTtBQUVKO0FBQUNrQixHQTFDdUJELFdBQVM7QUFBQSxNQUFUQTtBQUFTLElBQUFELElBQUFjO0FBQUEsYUFBQWQsSUFBQTtBQUFBLGFBQUFjLEtBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIkxheW91dCIsIlBhZ2VMYXlvdXQiLCJMaW5rIiwiZmluZEFydGljbGVCeVNsdWciLCJ0YWJzIiwic2VjdGlvbnMiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJhcnRpY2xlcyIsImNvbnRlbnQiLCJTZWN0aW9uIiwic2VjdGlvbiIsIm1hcCIsImFydGljbGUiLCJnZW4iLCJ0b1N0cmluZyIsImZvdW5kIiwidGFyZ2V0Q2F0ZWdvcnkiLCJjYXRlZ29yeVNsdWciLCJ0YXJnZXRTbHVnIiwic2x1ZyIsIl9jIiwiRXllSGVhbHRoIiwiX3MiLCJlbWFpbCIsInNldEVtYWlsIiwic3Vic2NyaWJlZCIsInNldFN1YnNjcmliZWQiLCJzZWN0aW9uUmVmcyIsInNjcm9sbFRvU2VjdGlvbiIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJfYzIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRXllSGVhbHRoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9QYWdlTGF5b3V0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGZpbmRBcnRpY2xlQnlTbHVnLCBhbGxBcnRpY2xlcyB9IGZyb20gXCJAL2RhdGEvYWxsQXJ0aWNsZXNcIjtcblxuXG5cbmNvbnN0IHRhYnMgPSBbXG4gIFwiRXllIENvbmRpdGlvbnNcIixcbiAgXCJWaXNpb24gUHJvYmxlbXNcIixcbiAgXCJEaWFnbm9zaXNcIixcbiAgXCJUcmVhdG1lbnRcIixcbiAgXCJQcmV2ZW50aW9uXCIsXG4gIFwiSGVhbHRoeSBWaXNpb25cIixcbl07XG5cbmNvbnN0IHNlY3Rpb25zID0gW1xuICB7XG4gICAgaWQ6IFwiZGlhZ25vc2lzXCIsXG4gICAgdGl0bGU6IFwiRXllIEV4YW1pbmF0aW9uIGFuZCBEaWFnbm9zaXNcIixcbiAgICBjYXRlZ29yeTogXCJEaWFnbm9zaXNcIixcbiAgICBhcnRpY2xlczogW1xuICAgICAgeyBpZDogXCJleGFtXCIsIHRpdGxlOiBcIkV5ZSBFeGFtIEJhc2ljc1wiLCBjb250ZW50OiBcIldoYXQgaGFwcGVucyBkdXJpbmcgY2hlY2t1cHPigKZcIiB9LFxuICAgICAgeyBpZDogXCJhY3VpdHlcIiwgdGl0bGU6IFwiVmlzaW9uIEFjdWl0eSBUZXN0aW5nXCIsIGNvbnRlbnQ6IFwiTWVhc3VyaW5nIHlvdXIgZXllc2lnaHTigKZcIiB9LFxuICAgICAgeyBpZDogXCJvY3RcIiwgdGl0bGU6IFwiT3B0aWNhbCBDb2hlcmVuY2UgVG9tb2dyYXBoeVwiLCBjb250ZW50OiBcIk9DVCBpbWFnaW5n4oCmXCIgfSxcbiAgICAgIHsgaWQ6IFwiZmllbGRcIiwgdGl0bGU6IFwiVmlzdWFsIEZpZWxkIFRlc3RpbmdcIiwgY29udGVudDogXCJQZXJpcGhlcmFsIHZpc2lvbiBhc3Nlc3NtZW504oCmXCIgfSxcbiAgICAgIHsgaWQ6IFwicHJlc3N1cmVcIiwgdGl0bGU6IFwiSW50cmFvY3VsYXIgUHJlc3N1cmUgTWVhc3VyZW1lbnRcIiwgY29udGVudDogXCJHbGF1Y29tYSBzY3JlZW5pbmfigKZcIiB9LFxuICAgICAgeyBpZDogXCJkaWxhdGVkXCIsIHRpdGxlOiBcIkRpbGF0ZWQgRXllIEV4YW1cIiwgY29udGVudDogXCJFeGFtaW5pbmcgdGhlIHJldGluYeKAplwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInRyZWF0bWVudFwiLFxuICAgIHRpdGxlOiBcIlRyZWF0bWVudCBPcHRpb25zXCIsXG4gICAgY2F0ZWdvcnk6IFwiVHJlYXRtZW50XCIsXG4gICAgYXJ0aWNsZXM6IFtcbiAgICAgIHsgaWQ6IFwiZ2xhc3Nlc1wiLCB0aXRsZTogXCJFeWVnbGFzc2VzXCIsIGNvbnRlbnQ6IFwiT3B0aWNhbCBjb3JyZWN0aW9u4oCmXCIgfSxcbiAgICAgIHsgaWQ6IFwiY29udGFjdHNcIiwgdGl0bGU6IFwiQ29udGFjdCBMZW5zZXNcIiwgY29udGVudDogXCJBZHZhbnRhZ2VzIGFuZCBjYXJl4oCmXCIgfSxcbiAgICAgIHsgaWQ6IFwibGFzaWtcIiwgdGl0bGU6IFwiTEFTSUsgYW5kIFJlZnJhY3RpdmUgU3VyZ2VyeVwiLCBjb250ZW50OiBcIkNvcnJlY3RpdmUgcHJvY2VkdXJlc+KAplwiIH0sXG4gICAgICB7IGlkOiBcImNhdGFyYWN0XCIsIHRpdGxlOiBcIkNhdGFyYWN0IFN1cmdlcnlcIiwgY29udGVudDogXCJMZW5zIHJlcGxhY2VtZW504oCmXCIgfSxcbiAgICAgIHsgaWQ6IFwiZ2xhdWNvbWEtbWVkc1wiLCB0aXRsZTogXCJHbGF1Y29tYSBNZWRpY2F0aW9uc1wiLCBjb250ZW50OiBcIkV5ZSBkcm9wcyBhbmQgbWVkaWNhdGlvbnPigKZcIiB9LFxuICAgICAgeyBpZDogXCJsYXNlclwiLCB0aXRsZTogXCJMYXNlciBhbmQgSW5qZWN0aW9uIFRoZXJhcGllc1wiLCBjb250ZW50OiBcIkFkdmFuY2VkIHRyZWF0bWVudHPigKZcIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJwcmV2ZW50aW9uXCIsXG4gICAgdGl0bGU6IFwiRXllIERpc2Vhc2UgUHJldmVudGlvblwiLFxuICAgIGNhdGVnb3J5OiBcIlByZXZlbnRpb25cIixcbiAgICBhcnRpY2xlczogW1xuICAgICAgeyBpZDogXCJ1dlwiLCB0aXRsZTogXCJVViBQcm90ZWN0aW9uXCIsIGNvbnRlbnQ6IFwiU3VuZ2xhc3NlcyBhbmQgc3VuIHNhZmV0eeKAplwiIH0sXG4gICAgICB7IGlkOiBcInNjcmVlblwiLCB0aXRsZTogXCJTY3JlZW4gVGltZSBhbmQgRXllIEhlYWx0aFwiLCBjb250ZW50OiBcIkRpZ2l0YWwgZXllIHN0cmFpbuKAplwiIH0sXG4gICAgICB7IGlkOiBcIm51dHJpdGlvblwiLCB0aXRsZTogXCJOdXRyaXRpb24gZm9yIEV5ZXNcIiwgY29udGVudDogXCJWaXRhbWlucyBhbmQgYW50aW94aWRhbnRz4oCmXCIgfSxcbiAgICAgIHsgaWQ6IFwiZXhlcmNpc2VcIiwgdGl0bGU6IFwiRXhlcmNpc2UgYW5kIFZpc2lvblwiLCBjb250ZW50OiBcIlBoeXNpY2FsIGFjdGl2aXR5IGJlbmVmaXRz4oCmXCIgfSxcbiAgICAgIHsgaWQ6IFwic21va2luZ1wiLCB0aXRsZTogXCJTbW9raW5nIENlc3NhdGlvblwiLCBjb250ZW50OiBcIlF1aXR0aW5nIGZvciBleWUgaGVhbHRo4oCmXCIgfSxcbiAgICAgIHsgaWQ6IFwiZXhhbXNcIiwgdGl0bGU6IFwiUmVndWxhciBFeWUgRXhhbXNcIiwgY29udGVudDogXCJTY3JlZW5pbmcgc2NoZWR1bGVz4oCmXCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaGVhbHRoeVwiLFxuICAgIHRpdGxlOiBcIk1haW50YWluaW5nIEhlYWx0aHkgVmlzaW9uXCIsXG4gICAgY2F0ZWdvcnk6IFwiSGVhbHRoeSBWaXNpb25cIixcbiAgICBhcnRpY2xlczogW1xuICAgICAgeyBpZDogXCJkYWlseVwiLCB0aXRsZTogXCJEYWlseSBFeWUgQ2FyZVwiLCBjb250ZW50OiBcIkh5Z2llbmUgYW5kIHByYWN0aWNlc+KAplwiIH0sXG4gICAgICB7IGlkOiBcImxlbnMtY2FyZVwiLCB0aXRsZTogXCJDb250YWN0IExlbnMgQ2FyZVwiLCBjb250ZW50OiBcIlByb3BlciBjbGVhbmluZyBhbmQgc3RvcmFnZeKAplwiIH0sXG4gICAgICB7IGlkOiBcImN2c1wiLCB0aXRsZTogXCJDb21wdXRlciBWaXNpb24gU3luZHJvbWVcIiwgY29udGVudDogXCJNYW5hZ2luZyBkaWdpdGFsIHN0cmFpbuKAplwiIH0sXG4gICAgICB7IGlkOiBcInNhZmV0eVwiLCB0aXRsZTogXCJTYWZldHkgRXlld2VhclwiLCBjb250ZW50OiBcIlByb3RlY3RpbmcgZXllcyBmcm9tIGluanVyeeKAplwiIH0sXG4gICAgICB7IGlkOiBcIm1lZHNcIiwgdGl0bGU6IFwiTWVkaWNhdGlvbiBTaWRlIEVmZmVjdHNcIiwgY29udGVudDogXCJEcnVncyBhZmZlY3RpbmcgdmlzaW9u4oCmXCIgfSxcbiAgICAgIHsgaWQ6IFwiZW1lcmdlbmN5XCIsIHRpdGxlOiBcIldoZW4gdG8gU2VlayBFbWVyZ2VuY3kgQ2FyZVwiLCBjb250ZW50OiBcIlVyZ2VudCBleWUgc3ltcHRvbXPigKZcIiB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5cbmZ1bmN0aW9uIFNlY3Rpb24oeyBzZWN0aW9uIH06IHtcbiAgc2VjdGlvbjoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYXJ0aWNsZXM6IHsgaWQ6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH1bXTtcbiAgfTtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTZcIj57c2VjdGlvbi50aXRsZX08L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC01XCI+XG4gICAgICAgIHtzZWN0aW9uLmFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdlbiA9IChhcnRpY2xlLmlkIHx8IGFydGljbGUudGl0bGUgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICAgICAgICBjb25zdCBmb3VuZCA9XG4gICAgICAgICAgICBmaW5kQXJ0aWNsZUJ5U2x1ZyhnZW4sIFwiZXllLWhlYWx0aFwiKSB8fFxuICAgICAgICAgICAgZmluZEFydGljbGVCeVNsdWcoYXJ0aWNsZS50aXRsZSwgXCJleWUtaGVhbHRoXCIpIHx8XG4gICAgICAgICAgICBmaW5kQXJ0aWNsZUJ5U2x1ZyhnZW4pIHx8XG4gICAgICAgICAgICBmaW5kQXJ0aWNsZUJ5U2x1ZyhhcnRpY2xlLnRpdGxlKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXRDYXRlZ29yeSA9IGZvdW5kID8gKGZvdW5kLmNhdGVnb3J5U2x1ZyB8fCBmb3VuZC5jYXRlZ29yeSkgOiBcImV5ZS1oZWFsdGhcIjtcbiAgICAgICAgICBjb25zdCB0YXJnZXRTbHVnID0gZm91bmQgPyBmb3VuZC5zbHVnIDogKGFydGljbGUuaWQgfHwgYXJ0aWNsZS50aXRsZSkudG9TdHJpbmcoKTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e2FydGljbGUuaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHAtNSBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbiBiZy13aGl0ZSBmbGV4IGZsZXgtY29sIHRleHQtbGVmdCBmb2N1czpvdXRsaW5lLW5vbmUgbm8tdW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgdG89e2AvY29uZGl0aW9ucy8ke3RhcmdldENhdGVnb3J5fS9hcnRpY2xlLyR7dGFyZ2V0U2x1Z31gfVxuICAgICAgICAgICAgICBzdGF0ZT17eyB0aXRsZTogZm91bmQgPyBmb3VuZC50aXRsZSA6IGFydGljbGUudGl0bGUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2hlYWx0aC1wbGFjZWhvbGRlci5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9e2FydGljbGUudGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTM2IG9iamVjdC1jb3ZlciByb3VuZGVkIG1iLTMgYmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItMlwiPnthcnRpY2xlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS03MDAgdGV4dC1zbSBmb250LXNlbWlib2xkIG10LWF1dG9cIj5cbiAgICAgICAgICAgICAgUmVhZCBtb3JlIOKGklxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV5ZUhlYWx0aCgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1YnNjcmliZWQsIHNldFN1YnNjcmliZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzZWN0aW9uUmVmcyA9IHtcbiAgICBcIkV5ZSBDb25kaXRpb25zXCI6IHVzZVJlZihudWxsKSxcbiAgICBcIlZpc2lvbiBQcm9ibGVtc1wiOiB1c2VSZWYobnVsbCksXG4gICAgXCJEaWFnbm9zaXNcIjogdXNlUmVmKG51bGwpLFxuICAgIFwiVHJlYXRtZW50XCI6IHVzZVJlZihudWxsKSxcbiAgICBcIlByZXZlbnRpb25cIjogdXNlUmVmKG51bGwpLFxuICAgIFwiSGVhbHRoeSBWaXNpb25cIjogdXNlUmVmKG51bGwpLFxuICB9O1xuXG4gIC8vIEhlbHBlciB0byBzY3JvbGwgdG8gc2VjdGlvblxuICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHNlY3Rpb25SZWZzW2NhdGVnb3J5XTtcbiAgICBpZiAocmVmICYmIHJlZi5jdXJyZW50KSB7XG4gICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8UGFnZUxheW91dFxuICAgICAgICB0aXRsZT1cIkV5ZSBIZWFsdGhcIlxuICAgICAgICBzdWJ0aXRsZT1cIkNvbXByZWhlbnNpdmUgZ3VpZGUgdG8gZXllIGRpc2Vhc2VzLCB2aXNpb24gcHJvYmxlbXMsIGFuZCBtYWludGFpbmluZyBoZWFsdGh5IGV5ZXNpZ2h0LiBVbmRlcnN0YW5kaW5nIGNvbW1vbiBleWUgY29uZGl0aW9ucyBhbmQgcHJvdGVjdGluZyB5b3VyIHZpc2lvbi5cIlxuICAgICAgICB0YWJzPXt0YWJzfVxuICAgICAgICBhY3RpdmVUYWI9e251bGx9XG4gICAgICAgIG9uVGFiQ2xpY2s9e3Njcm9sbFRvU2VjdGlvbn1cbiAgICAgICAgaGVyb0NvbG9yPVwiIzI1NjNlYlwiXG4gICAgICA+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNwYWNlLXktMTJcIj5cbiAgICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17c2VjdGlvbi5pZH0gcmVmPXtzZWN0aW9uUmVmc1tzZWN0aW9uLmNhdGVnb3J5XX0+XG4gICAgICAgICAgICAgIDxTZWN0aW9uIHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgIHsvKiBORVdTTEVUVEVSIFJFTU9WRUQgKi99XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvUGFnZUxheW91dD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiRTovc2l4aGVhbHRoIGUgZmlsZS9zcmMvcGFnZXMvRXllSGVhbHRoLnRzeCJ9
