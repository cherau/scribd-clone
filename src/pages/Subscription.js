import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuBookIcon from "@mui/icons-material/MenuBook";
//import MenuBookIcon from "@material-ui/icons/MenuBook";
import HeadphonesIcon from "@mui/icons-material/Headset";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MicIcon from "@mui/icons-material/Mic";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DocumentScannerIcon from "@mui/icons-material/Description";

const useStyles = makeStyles((theme) => ({}));

export default function Subscription() {
  const classes = useStyles();
  return (
    <>
      <div className="outer">
        <h1 className="heading"> All in one simple subscription</h1>
        <div className="icons">
          <div className="icon">
            <MenuBookIcon />
            <br />
            Books
          </div>

          <div className="icon">
            <HeadphonesIcon />
            <br />
            AudioBooks
          </div>
          <div className="icon">
            <LibraryBooksIcon />
            <br />
            Magazines
          </div>
          <div className="icon">
            <MicIcon />
            <br />
            Podcast
          </div>
          <div className="icon">
            <MusicNoteIcon />
            <br />
            SheetMusic
          </div>
          <div className="icon">
            <DocumentScannerIcon />
            <br /> Documents
          </div>
        </div>
      </div>

      <div className="content2">
        <p>
          <i>
            Scribd is overall the best and most convenient deal for online
            reading.
          </i>
        </p>
        <p>Business Insider</p>
      </div>
    </>
  );
}
