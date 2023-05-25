import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="flex cursor-pointer p-3 hover:bg-slate-100 ">
      <div className="text-[#0177B7] mr-1 text-sm  ">
        {/* article left */}
        <FiberManualRecordIcon />
      </div>
      <div className="flex-1">
        {/* article right */}
        <h4 className="text-sm">{heading}</h4>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="sticky top-20 flex-[0.2] bg-white rounded-xl border border-solid border-gray-300 h-fit pb-3">
      <div className="flex items-center justify-between p-3">
        <h2 className="font-normal text-base">LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("REACT is BACK", "TOP-News - 9-099 readers")}
      {newsArticle(
        "CORONA VIRUS: PAKISTAN Updates",
        "TOP-News - 5-299 readers"
      )}
      {newsArticle("REDUX-TOO GOOD?", "TOP-News - 7-221 readers")}
      {newsArticle("IMRAN KHAN ABDUCTED", "TOP-News - 3 2499 readers")}
      {newsArticle("PAKISTAN win the WC", "TOP-News - 15-2419 readers")}
    </div>
  );
}

export default Widgets;
