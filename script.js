function analyzeProfile() {

    const profile = document
        .getElementById("profile")
        .value
        .toLowerCase();

    const loading = document.getElementById("loading");
    const results = document.getElementById("results");
    const jobList = document.getElementById("jobList");

    if (profile.trim() === "") {
        alert("Please paste your LinkedIn profile information first.");
        return;
    }

    loading.style.display = "block";
    results.style.display = "none";

    setTimeout(() => {

        const jobs = [];

        // Software Developer
        if (
            profile.includes("python") ||
            profile.includes("java") ||
            profile.includes("c++") ||
            profile.includes("programming") ||
            profile.includes("software")
        ) {
            jobs.push({
                title: "Software Developer",
                match: "90%",
                description:
                    "Your programming and software development skills make you a good candidate for software development roles.",
                skills:
                    "Programming, Problem Solving, Git, Data Structures"
            });
        }

        // Data Analyst
        if (
            profile.includes("python") ||
            profile.includes("excel") ||
            profile.includes("sql") ||
            profile.includes("pandas") ||
            profile.includes("data")
        ) {
            jobs.push({
                title: "Data Analyst",
                match: "88%",
                description:
                    "Your data and analytical skills match well with entry-level data analyst positions.",
                skills:
                    "Excel, SQL, Python, Pandas, Data Visualization"
            });
        }

        // Web Developer
        if (
            profile.includes("html") ||
            profile.includes("css") ||
            profile.includes("javascript") ||
            profile.includes("web")
        ) {
            jobs.push({
                title: "Web Developer",
                match: "86%",
                description:
                    "Your web development knowledge can be useful for frontend and junior web developer roles.",
                skills:
                    "HTML, CSS, JavaScript, Responsive Design"
            });
        }

        // AI / ML
        if (
            profile.includes("machine learning") ||
            profile.includes("artificial intelligence") ||
            profile.includes("ai") ||
            profile.includes("tensorflow")
        ) {
            jobs.push({
                title: "AI / ML Intern",
                match: "84%",
                description:
                    "Your AI and machine learning skills can match internship and junior ML opportunities.",
                skills:
                    "Python, Machine Learning, Mathematics, Data Analysis"
            });
        }

        // Cybersecurity
        if (
            profile.includes("cybersecurity") ||
            profile.includes("cyber security") ||
            profile.includes("network security") ||
            profile.includes("ethical hacking")
        ) {
            jobs.push({
                title: "Cybersecurity Analyst",
                match: "82%",
                description:
                    "Your security-related skills may be suitable for junior cybersecurity roles.",
                skills:
                    "Networking, Security, Linux, Cybersecurity"
            });
        }

        // Default recommendations
        if (jobs.length === 0) {

            jobs.push(
                {
                    title: "Software Developer Intern",
                    match: "70%",
                    description:
                        "A good starting role if you have programming or computer science fundamentals.",
                    skills:
                        "Programming, Git, Problem Solving"
                },
                {
                    title: "Data Analyst Intern",
                    match: "68%",
                    description:
                        "Suitable for candidates interested in data and analytical work.",
                    skills:
                        "Excel, SQL, Python, Data Analysis"
                },
                {
                    title: "Web Developer Intern",
                    match: "65%",
                    description:
                        "A suitable option if you want to build websites and web applications.",
                    skills:
                        "HTML, CSS, JavaScript"
                }
            );
        }

        jobList.innerHTML = "";

        jobs.forEach(job => {

            const jobCard = document.createElement("div");

            jobCard.className = "job";

            jobCard.innerHTML = `
                <h3>${job.title}</h3>

                <span class="match">
                    ${job.match} Match
                </span>

                <p>${job.description}</p>

                <div class="skills">
                    <strong>Important Skills:</strong>
                    ${job.skills}
                </div>
            `;

            jobList.appendChild(jobCard);
        });

        loading.style.display = "none";
        results.style.display = "block";

        results.scrollIntoView({
            behavior: "smooth"
        });

    }, 1500);
}