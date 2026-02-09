import React from 'react'

export default function RadiationTherapyGuide() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <article className="prose lg:prose-lg lg:col-span-3">
          <header className="mb-6">
            <div className="bg-white rounded shadow p-4 md:flex md:items-center md:gap-6">
              <img
                src="https://images.unsplash.com/photo-1581092580496-3b1b6f4d6f6a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c3f2f4b7f4f5a6a"
                alt="Radiation therapy equipment"
                className="w-full md:w-72 h-40 object-cover rounded mb-4 md:mb-0"
              />
              <div>
                <h1 className="text-3xl font-extrabold">Radiation Therapy Guide</h1>
                <p className="text-gray-600 mt-2">A practical, patient-centered guide to how radiation therapy works, what to expect, managing side effects, and long-term follow-up.</p>

                <div className="mt-4 text-sm text-gray-700">
                  <div><strong>Author:</strong> SixHealth Editorial Team • <strong>Medical review:</strong> Prof. Daniel Reed, MD (Radiation Oncology)</div>
                  <div className="mt-1 text-xs text-gray-500">Last updated: February 06, 2026 • Peer review: 2025</div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-6">
            <nav className="bg-gray-50 p-4 rounded-md">
              <h2 className="font-semibold">Table of Contents (Additional Links)</h2>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                <li><a href="#what-is-radiation">What is radiation therapy?</a></li>
                <li><a href="#types">Types of radiation therapy</a></li>
                <li><a href="#planning">Planning and simulation</a></li>
                <li><a href="#treatment-day">What to expect on treatment day</a></li>
                <li><a href="#side-effects">Side effects: acute and late</a></li>
                <li><a href="#skin-care">Skin care during radiation</a></li>
                <li><a href="#nutrition">Nutrition, fatigue, and activity</a></li>
                <li><a href="#fertility-pregnancy">Fertility, pregnancy, and contraception</a></li>
                <li><a href="#long-term">Long-term follow-up and survivorship</a></li>
                <li><a href="#questions">Common questions</a></li>
                <li><a href="#resources">Resources & further reading</a></li>
              </ul>
            </nav>
          </section>

          <section id="what-is-radiation">
            <h2>What is radiation therapy?</h2>
            <p>
              Radiation therapy (RT) uses high-energy particles or waves — X-rays, gamma rays, electrons, or protons — to damage the DNA of cancer cells and stop their ability to grow and divide. Delivered by specialized equipment, radiation is one of the three primary cancer treatments alongside surgery and systemic therapy (chemotherapy, hormone therapy, targeted therapy, immunotherapy).
            </p>
            <p>
              RT can be curative, adjuvant (given after surgery to lower recurrence risk), neoadjuvant (before surgery to shrink a tumor), or palliative (to relieve symptoms). Dose, schedule, and technique are selected to maximize tumor control while minimizing side effects to nearby healthy tissues.
            </p>
          </section>

          <section id="types">
            <h2>Types of radiation therapy</h2>
            <h3>External beam radiation therapy (EBRT)</h3>
            <p>
              EBRT is the most common form and uses a machine (linear accelerator, or LINAC) outside the body to direct radiation beams to a tumor. Techniques vary in complexity from conventional 2D approaches to 3D conformal radiation therapy, intensity-modulated radiation therapy (IMRT), volumetric modulated arc therapy (VMAT), and stereotactic body radiotherapy (SBRT).
            </p>
            <h3>Brachytherapy</h3>
            <p>
              Brachytherapy places a radioactive source inside or next to the tumor (for example, in cervical, prostate, or some breast cancers). It delivers very high local doses while sparing surrounding tissue.
            </p>
            <h3>Proton and particle therapy</h3>
            <p>
              Proton therapy and other particle therapies deposit energy differently than photons and can reduce radiation dose beyond the tumor, potentially reducing long-term side effects for select patients and tumor sites.
            </p>
          </section>

          <section id="planning">
            <h2>Planning and simulation</h2>
            <p>
              Radiation planning is a multi-step process designed to map the treatment area precisely and protect normal tissues. It may include CT simulation (a CT scan in the treatment position), MRI or PET fusion for better tumor definition, and immobilization devices to keep you still during treatment.
            </p>
            <p>
              The team (radiation oncologist, medical physicist, dosimetrist, radiation therapist) creates a treatment plan that shapes beam angles, energies, and intensities to cover the target (tumor or tumor bed) and limit dose to organs at risk (heart, lungs, spinal cord, etc.). You will usually have a simulation session where marks or temporary tattoos are placed to guide daily positioning.
            </p>
            <p>
              Modern techniques like IMRT/VMAT and image-guided radiation therapy (IGRT) provide highly conformal dosing and use imaging at the treatment machine to verify the target each day.
            </p>
          </section>

          <section id="treatment-day">
            <h2>What to expect on treatment day</h2>
            <p>
              Radiation sessions are usually short (a few minutes to 30 minutes on the machine), but you should plan for extra time for check-in and setup. Most treatments are delivered daily (Monday–Friday) for several weeks depending on the regimen, though hypofractionated schedules deliver higher doses in fewer visits for some cancers.
            </p>
            <p>
              You will lie on the treatment couch in the same position as during simulation, with immobilization devices as needed. The therapists will leave the room during beam delivery but watch and listen to you constantly. The machine may rotate or move, and you may hear buzzing or clicking noises. Treatments are painless; you must remain still while the beam is on.
            </p>
          </section>

          <section id="side-effects">
            <h2>Side effects: acute and late</h2>
            <p>
              Side effects depend on the treated area, total dose, fractionation (dose per session), and individual factors. They are generally divided into acute (during or shortly after treatment) and late (months to years later).
            </p>
            <h3>Common acute side effects</h3>
            <ul>
              <li>Fatigue — the most common experience; often accumulates over the course of therapy.</li>
              <li>Skin irritation in the treated area — redness, peeling, dryness, or itching, similar to sunburn.</li>
              <li>Local effects depending on site — e.g., sore throat and difficulty swallowing after head/neck RT; diarrhea after pelvic RT; urinary frequency after prostate RT; breast swelling after chest wall RT.</li>
            </ul>
            <h3>Late effects and risks</h3>
            <p>
              Late effects can include fibrosis, persistent lymphedema (if lymphatics are in the field), secondary malignancies (a small long-term risk), organ-specific dysfunction (cardiac, pulmonary, endocrine), and bone changes. Modern planning aims to reduce these risks, but long-term follow-up is important to detect and manage late issues early.
            </p>
          </section>

          <section id="skin-care">
            <h2>Skin care during radiation</h2>
            <p>
              Good skin care reduces discomfort and prevents infection. Typical recommendations include gentle cleansing with mild soap, patting dry, using fragrance-free moisturizers, wearing loose clothing, and avoiding sun exposure on the treated area. Your team will give specific product recommendations and may advise on when to use aloe or steroid creams depending on severity.
            </p>
            <p>
              Avoid harsh chemicals, perfumes, tight straps, or anything that rubs the treatment area. If blisters or open sores develop, notify the team promptly — they can provide wound-care advice and dressings.
            </p>
          </section>

          <section id="nutrition">
            <h2>Nutrition, fatigue, and activity</h2>
            <p>
              Fatigue is common during RT. Maintaining good nutrition, staying hydrated, and pacing activities are key. Small, frequent meals with balanced protein and calories support energy and tissue repair. If appetite or swallowing is affected, consult a dietitian for tailored strategies or supplements.
            </p>
            <p>
              Moderate activity, especially walking, often helps reduce fatigue and improves mood. Balance rest with light exercise as tolerated. Let your treatment team know about severe fatigue, weight loss, or changes in appetite so they can intervene.
            </p>
          </section>

          <section id="fertility-pregnancy">
            <h2>Fertility, pregnancy, and contraception</h2>
            <p>
              Radiation can affect fertility depending on the treatment site and dose. Pelvic or abdominal RT may impact ovarian or testicular function. Discuss fertility preservation (sperm banking, egg/embryo freezing, ovarian transposition) with your oncology team before treatment if you may want children later.
            </p>
            <p>
              Pregnancy is contraindicated during pelvic or abdominal RT, and effective contraception during treatment is important. If you discover pregnancy or suspect you may be pregnant, inform your care team immediately.
            </p>
          </section>

          <section id="long-term">
            <h2>Long-term follow-up and survivorship</h2>
            <p>
              After completing RT, follow-up visits monitor recovery, manage late effects, and detect recurrence. Survivorship care plans often coordinate input from radiation oncology, medical oncology, surgery, primary care, and allied health (physiotherapy, lymphedema specialists, dietitians).
            </p>
            <p>
              Keep a record of your treatment (dates, dose, site) and any late symptoms to inform future care. Many centers provide written care plans and contact numbers for late-effect clinics.
            </p>
          </section>

          <section id="questions">
            <h2>Common questions</h2>
            <h3>Does radiation make you radioactive?</h3>
            <p>
              No. External beam radiation does not make you radioactive. Brachytherapy with sealed sources may involve temporary radioactivity while the source is in place; your team will explain safety measures if applicable.
            </p>
            <h3>Will radiation cause hair loss?</h3>
            <p>
              Hair loss occurs only in the treated field (e.g., head RT) and is typically temporary, although permanent loss is possible with higher doses.
            </p>
            <h3>Can I drive or work during treatment?</h3>
            <p>
              Most people continue to work and drive during RT, adjusting hours as needed for fatigue or side effects. Discuss your job, commute, and schedules with the team to plan support.
            </p>
          </section>

          <section id="resources">
            <h2>Resources & further reading</h2>
            <ul>
              <li><a href="https://www.radiologyinfo.org" target="_blank" rel="noreferrer">RadiologyInfo.org — radiation therapy overview</a></li>
              <li><a href="https://www.cancer.org" target="_blank" rel="noreferrer">American Cancer Society — radiation therapy</a></li>
              <li><a href="https://www.nccn.org" target="_blank" rel="noreferrer">NCCN Guidelines (clinicians)</a></li>
            </ul>
          </section>

          <footer className="mt-8 text-sm text-gray-600">
            <p>
              Disclaimer: This guide is educational and not a substitute for professional medical advice. Speak to your oncology team for personalized treatment planning.
            </p>
          </footer>
        </article>

        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white border rounded p-4">
              <h4 className="font-semibold">On this page</h4>
              <ul className="mt-3 text-sm space-y-2 text-gray-700">
                <li><a href="#what-is-radiation" className="hover:underline">What is radiation therapy?</a></li>
                <li><a href="#types" className="hover:underline">Types</a></li>
                <li><a href="#planning" className="hover:underline">Planning</a></li>
                <li><a href="#treatment-day" className="hover:underline">Treatment day</a></li>
                <li><a href="#side-effects" className="hover:underline">Side effects</a></li>
                <li><a href="#skin-care" className="hover:underline">Skin care</a></li>
                <li><a href="#resources" className="hover:underline">Resources</a></li>
              </ul>
            </div>

            <div className="bg-white border rounded p-4">
              <h4 className="font-semibold">Share</h4>
              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Facebook</button>
                <button className="px-3 py-1 bg-blue-400 text-white rounded text-sm">Twitter</button>
              </div>
            </div>

            <div className="bg-white border rounded p-4">
              <h4 className="font-semibold">Related articles</h4>
              <ul className="mt-3 text-sm space-y-2 text-gray-700">
                <li><a href="/chemotherapy" className="hover:underline">Chemotherapy: what to expect</a></li>
                <li><a href="/surgery-for-cancer" className="hover:underline">Surgery and post-op recovery</a></li>
                <li><a href="/radiation-lymphedema" className="hover:underline">Radiation and lymphedema risk</a></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
