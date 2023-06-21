import { useState } from "react";

const images = [
  "https://hrbackend.scasset.com/img/app/icon/Icon_agency_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_allhands.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_approval.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_bell_black.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_calender_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_clockonereport.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_company_black.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_company_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_fineone.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_flexibenefits.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_gate_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_growideas.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_heart_black.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_heart_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_homeautomation.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_hrbpcontact.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_hrform.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_HRมาบอก.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_iphone_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_iphone_white.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_itfaqs.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_line_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_line_white.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_mail_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_mail_white.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_manager_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_myinfo.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_myteam_black.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_nft.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_onelaa.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_phone_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_projectreturn.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_qr_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_resetpassword.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_roomreservation.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_scasset_orange.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_scinonecenter.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_sclearninghub.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_scwhistlebowingsystem.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_sendstar.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_sentstar_white.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_took9.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_worksafety.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_ติดตั้งแอร์พร้อมใช้แบบ_HomeAutomation.svg",
  "https://hrbackend.scasset.com/img/app/icon/Icon_ประกันสุขภาพ.svg",
  "https://hrbackend.scasset.com/img/app/icon/scinone.svg"
];

function App() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async (imgSrc) => {
    try {
      await navigator.clipboard.writeText(window.location.origin + imgSrc);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div>
      {copySuccess && <div style={{ color: "green" }}>{copySuccess}</div>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {images.map((img, index) => (
          <div key={index}>
            <button onClick={() => copyToClipboard(img)}>
              <img src={img} alt="svg" height="50px" width="50px" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
