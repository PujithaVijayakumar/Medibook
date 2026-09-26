# MediBook Classic Plus

This version preserves the earlier MediBook UI with the top navigation selectors and adds the requested healthcare features without changing the visual direction.

## Run
Open the folder in VS Code and use Live Server on `index.html`. External animation/PDF libraries are loaded from public CDNs; all application data and user-generated state stays in localStorage.

## Top navigation
Home · Doctors · Appointments · Records · Services · Care · Doctor View · Settings, plus a location selector and theme control.

## Added features
- The supplied 14 doctor profiles are displayed with specialty, qualification, experience, rating/review count, fee, availability, symptoms and slots.
- 18 specialty categories, horizontal selector, doctor search and favorites.
- Symptom keyword suggestion.
- Five-step booking: date → slot → patient/mode/hospital → payment → confirmation + bill.
- LocalStorage slot locking, unique booking ID, cancel/reschedule and completion/rating.
- In-person and video consultations.
- Hospital selector with four demo hospitals and location selector.
- Client-side PDF appointment bill.
- Appointment reminder 10 minutes before the selected time while the page is open.
- Lab-test booking.
- Medicine ordering and daily medicine reminder timers while the page is open.
- Surgery planning with hospital selection.
- Expert Q&A.
- Separate Patient Care Lifecycle Tracker dashboard with Consultation, Initial Record, Treatment, Follow-up, Recovered and Recurring stages.
- Separate Doctor View using the same localStorage bookings.
- Dark/light mode, compact mode, optional confirmation sound, onboarding animation, custom cursor, magnetic buttons, glass UI and GSAP reveals.

## No backend
There is no server, database, authentication service or API. Payment is explicitly a frontend demo; no financial credentials are collected.

## Latest additions
- 36 doctor profiles: exactly 2 doctors for each of the 18 specialties.
- Hero centerpiece now uses `assets/dna.mp4` as a muted, looping video. Replace that file with your own DNA video if desired.
- Location selector automatically maps Chennai/Adyar/Anna Nagar/Guindy/Nungambakkam to the corresponding default hospital; the hospital cards still allow manual selection.


## Specialty artwork
The Home specialty gallery now uses the 18 specialty images supplied by the user. The original horizontal specialty selector is preserved in the Doctors view.


## Service workflows added
- Lab booking supports home collection or walk-in lab, date, time, place, conditional collection address, price breakdown, payment method and receipt.
- Pharmacy supports medicine search, quantity, frontend inventory/availability and price management, adding/removing medicines, delivery or pickup, delivery address, cash on delivery, demo UPI/card payment, order receipt and back-to-home flow.
- Specialist images are sourced from the supplied 18-specialty image sheet and used by both the home specialty gallery and doctor specialty selector.
- No backend or external database is required.
