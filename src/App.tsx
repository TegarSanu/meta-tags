import React, { useEffect, useState } from "react";

// Definisikan tipe untuk data perusahaan
interface Company {
  name: string;
  description: string;
  logo: string;
}

const App: React.FC = () => {
  // State untuk menyimpan data company
  const [company, setCompany] = useState<Company>({
    name: "Default Company",
    description: "This is a default description for the company.",
    logo: "/default-logo.png",
  });

  // Function untuk mengupdate meta tags
  const updateMetaTags = (name: string, description: string, logo: string) => {
    document.title = name; // Update title

    // Update OpenGraph Meta Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute("content", name);
    if (ogDescription) ogDescription.setAttribute("content", description);
    if (ogImage) ogImage.setAttribute("content", logo);

    // Update Twitter Meta Tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (twitterTitle) twitterTitle.setAttribute("content", name);
    if (twitterDescription)
      twitterDescription.setAttribute("content", description);
    if (twitterImage) twitterImage.setAttribute("content", logo);
  };

  // Fetch data dari API saat komponen di-mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Panggil API untuk mendapatkan data perusahaan
        const response = await fetch("https://api.example.com/company");
        const data: Company = await response.json();

        // Simpan data company di state
        setCompany({
          name: data.name,
          description: data.description,
          logo: data.logo,
        });

        // Update meta tags dengan data dari API
        updateMetaTags(data.name, data.description, data.logo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default App;
