Lead Management Dashboard
=========================

This project is a fully functional **Lead Management Dashboard** built with **React**, **TypeScript**, **Supabase**, 
and **React Hook Form** for managing leads, including **resume uploads** and **sortable database records**.

Features
--------

*   **Lead Storage in Supabase**: All leads, including resumes, are stored in Supabase.
*   **Resume Upload**: Users can upload resumes, which are linked to the respective lead.
*   **Forms with Validation**: Implemented using **React Hook Form** and **Zod**, ensuring robust validation.
*   **Sortable & Editable Table**: Data from the database is **sortable**, and lead statuses can be changed directly from the table.
*   **Dashboard Page (/dashboard)**: Displays leads in a structured, sortable table.
*   **Authentication**: Includes login and logout functionality.

Installation
------------

1.  Clone the repository:
    ```bash
    git clone https://github.com/nykoliuk/lead-form.git
    cd your-repo
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up environment variables in .env:
    ```plaintext
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    SUPABASE_SERVICE_ROLE_KEY=your_supabase_anon_key
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

Future Improvements
-------------------

*   **Lead Details Page**: Update lead information, preview resumes, and delete leads.
*   **Unit Tests**: Adding tests to ensure the stability of the application.
*   **Better Design Implementation**: It would be much faster and closer to the design if a **real Figma link** was provided instead of just a screenshot.

Notes
-----

Although the task originally required **JSONForms**, I decided to **first complete all core functionality** using **React Hook Form** and **Zod**, as these are tools I regularly use.
