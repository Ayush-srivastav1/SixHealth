import COPD from "./COPD";
import Progression from "./COPD/Progression";
import WhatIsCOPD from "./COPD/WhatIsCOPD";
import Myths from "./COPD/Myths";
import Facts from "./COPD/Facts";
import NewTreatments from "./COPD/NewTreatments";
import TreatmentOptions from "./COPD/TreatmentOptions";
import DrugsList from "./COPD/DrugsList";
import LungTransplants from "./COPD/LungTransplants";
import BreathingExercises from "./COPD/BreathingExercises";
import COPDExercises from "./COPD/COPDExercises";
import FlareUp from "./COPD/FlareUp";
import Vaccines from "./COPD/Vaccines";
import Travel from "./COPD/Travel";
import AntiInflammatoryDiet from "./COPD/AntiInflammatoryDiet";
import NutritionGuide from "./COPD/NutritionGuide";
import AdaptiveExercises from "./COPD/AdaptiveExercises";
import QuittingSmoking from "./COPD/QuittingSmoking";
import ProgressAfterQuitting from "./COPD/ProgressAfterQuitting";
import ColdTurkey from "./COPD/ColdTurkey";
import QuitTobacco from "./COPD/QuitTobacco";
import ProtectLungs from "./COPD/ProtectLungs";
import AsthmaAttack from "./COPD/AsthmaAttack";
import DisabilityBenefits from "./COPD/DisabilityBenefits";
import FluRisk from "./COPD/FluRisk";
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/COPD" element={<COPD />} />
  <Route path="/COPD/progression" element={<Progression />} />
  <Route path="/COPD/what-is-copd" element={<WhatIsCOPD />} />
  <Route path="/COPD/myths" element={<Myths />} />
  <Route path="/COPD/facts" element={<Facts />} />
  <Route path="/COPD/new-treatments" element={<NewTreatments />} />
  <Route path="/COPD/treatment-options" element={<TreatmentOptions />} />
  <Route path="/COPD/drugs-list" element={<DrugsList />} />
  <Route path="/COPD/lung-transplants" element={<LungTransplants />} />
  <Route path="/COPD/breathing-exercises" element={<BreathingExercises />} />
  <Route path="/COPD/copd-exercises" element={<COPDExercises />} />
  <Route path="/COPD/flare-up" element={<FlareUp />} />
  <Route path="/COPD/vaccines" element={<Vaccines />} />
  <Route path="/COPD/travel" element={<Travel />} />
  <Route path="/COPD/anti-inflammatory-diet" element={<AntiInflammatoryDiet />} />
  <Route path="/COPD/nutrition-guide" element={<NutritionGuide />} />
  <Route path="/COPD/adaptive-exercises" element={<AdaptiveExercises />} />
  <Route path="/COPD/quitting-smoking" element={<QuittingSmoking />} />
  <Route path="/COPD/progress-after-quitting" element={<ProgressAfterQuitting />} />
  <Route path="/COPD/cold-turkey" element={<ColdTurkey />} />
  <Route path="/COPD/quit-tobacco" element={<QuitTobacco />} />
  <Route path="/COPD/protect-lungs" element={<ProtectLungs />} />
  <Route path="/COPD/asthma-attack" element={<AsthmaAttack />} />
  <Route path="/COPD/disability-benefits" element={<DisabilityBenefits />} />
  <Route path="/COPD/flu-risk" element={<FluRisk />} />
</Routes>
