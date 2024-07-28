import { useEffect, useState } from "react";
import styles from "./DistrictHeadquarters.module.css";

const districts = [
  { district: "Achham", headquarters: "Mangalsen" },
  { district: "Arghakhanchi", headquarters: "Sandhikharka" },
  { district: "Baglung", headquarters: "Baglung" },
  { district: "Baitadi", headquarters: "Dasharathchand" },
  { district: "Bajhang", headquarters: "Chainpur" },
  { district: "Bajura", headquarters: "Martadi" },
  { district: "Banke", headquarters: "Nepalgunj" },
  { district: "Bara", headquarters: "Kalaiya" },
  { district: "Bardiya", headquarters: "Gulariya" },
  { district: "Bhaktapur", headquarters: "Bhaktapur" },
  { district: "Bhojpur", headquarters: "Bhojpur" },
  { district: "Chitwan", headquarters: "Bharatpur" },
  { district: "Dadeldhura", headquarters: "Dadeldhura" },
  { district: "Dailekh", headquarters: "Dailekh" },
  { district: "Dang", headquarters: "Ghorahi" },
  { district: "Darchula", headquarters: "Khalanga" },
  { district: "Dhading", headquarters: "Dhading Besi" },
  { district: "Dhankuta", headquarters: "Dhankuta" },
  { district: "Dhanusha", headquarters: "Janakpur" },
  { district: "Dolakha", headquarters: "Charikot" },
  { district: "Dolpa", headquarters: "Dunai" },
  { district: "Doti", headquarters: "Dipayal Silgadhi" },
  { district: "Eastern Rukum", headquarters: "Rukumkot" },
  { district: "Gorkha", headquarters: "Gorkha" },
  { district: "Gulmi", headquarters: "Tamghas" },
  { district: "Humla", headquarters: "Simikot" },
  { district: "Ilam", headquarters: "Ilam" },
  { district: "Jajarkot", headquarters: "Khalanga" },
  { district: "Jhapa", headquarters: "Bhadrapur" },
  { district: "Jumla", headquarters: "Khalanga" },
  { district: "Kailali", headquarters: "Dhangadhi" },
  { district: "Kalikot", headquarters: "Manma" },
  { district: "Kanchanpur", headquarters: "Bhimdatta" },
  { district: "Kapilvastu", headquarters: "Taulihawa" },
  { district: "Kaski", headquarters: "Pokhara" },
  { district: "Kathmandu", headquarters: "Kathmandu" },
  { district: "Kavrepalanchok", headquarters: "Dhulikhel" },
  { district: "Khotang", headquarters: "Diktel" },
  { district: "Lalitpur", headquarters: "Patan" },
  { district: "Lamjung", headquarters: "Besisahar" },
  { district: "Mahottari", headquarters: "Jaleshwar" },
  { district: "Makwanpur", headquarters: "Hetauda" },
  { district: "Manang", headquarters: "Chame" },
  { district: "Morang", headquarters: "Biratnagar" },
  { district: "Mugu", headquarters: "Gamgadhi" },
  { district: "Mustang", headquarters: "Jomsom" },
  { district: "Myagdi", headquarters: "Beni" },
  { district: "Nawalpur", headquarters: "Kawasoti" },
  { district: "Nuwakot", headquarters: "Bidur" },
  { district: "Okhaldhunga", headquarters: "Siddhicharan" },
  { district: "Palpa", headquarters: "Tansen" },
  { district: "Panchthar", headquarters: "Phidim" },
  { district: "Parasi", headquarters: "Ramgram" },
  { district: "Parbat", headquarters: "Kusma" },
  { district: "Parsa", headquarters: "Birgunj" },
  { district: "Pyuthan", headquarters: "Pyuthan" },
  { district: "Ramechhap", headquarters: "Manthali" },
  { district: "Rasuwa", headquarters: "Dhunche" },
  { district: "Rautahat", headquarters: "Gaur" },
  { district: "Rolpa", headquarters: "Liwang" },
  { district: "Rupandehi", headquarters: "Bhairahawa" },
  { district: "Salyan", headquarters: "Salyan" },
  { district: "Sankhuwasabha", headquarters: "Khandbari" },
  { district: "Saptari", headquarters: "Rajbiraj" },
  { district: "Sarlahi", headquarters: "Malangwa" },
  { district: "Sindhuli", headquarters: "Sindhulimadi" },
  { district: "Sindhupalchok", headquarters: "Chautara" },
  { district: "Siraha", headquarters: "Siraha" },
  { district: "Solukhumbu", headquarters: "Salleri" },
  { district: "Sunsari", headquarters: "Inaruwa" },
  { district: "Surkhet", headquarters: "Birendranagar" },
  { district: "Syangja", headquarters: "Syangja" },
  { district: "Tanahun", headquarters: "Damauli" },
  { district: "Taplejung", headquarters: "Taplejung" },
  { district: "Terhathum", headquarters: "Myanglung" },
  { district: "Udayapur", headquarters: "Gaighat" },
  { district: "Western Rukum", headquarters: "Musikot" },
];

const DistrictHeadquarters = () => {
  const [text, setText] = useState("");
  const [districtIndex, setDistrictIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDistrict = districts[districtIndex];
      const fullText = `District: ${currentDistrict.district} <br> Headquarter: ${currentDistrict.headquarters}.`;
      setText(fullText);

      setDistrictIndex((prevIndex) => (prevIndex + 1) % districts.length);
    }, 2000); // Display each district for 5 seconds

    return () => clearInterval(interval);
  }, [districtIndex]);

  return (
    <div className="mt-20 mb-36">
      <div>
        <div className={styles.autoTextAnimation}>
          <h1 className={styles.district}>
            District and Headquarters of Nepal:
          </h1>
          <br />
          <div
            className={styles.container}
            dangerouslySetInnerHTML={{ __html: `<h1>${text}</h1>` }}
          />
        </div>
      </div>
      <div className="text-center text-white">
        <a
          href="https://github.com/ashokneupane100/cool_js_projects/tree/e5c316417a3f0418016410467b1bb73374359503/animatedText"
          target="_blank"
        >
          <button className="text-2xl bg-blue-900 p-4 rounded-lg">
            Click here for the source code
          </button>
        </a>
      </div>
    </div>
  );
};

export default DistrictHeadquarters;
