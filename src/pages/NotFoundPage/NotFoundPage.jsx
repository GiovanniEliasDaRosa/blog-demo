import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage({ info }) {
  return (
    <>
      <h1>404</h1>
      {info ? (
        <>
          <p>{info.title}</p>
          {info.description ? <p>{info.description}</p> : ""}
        </>
      ) : (
        <p>Oops! The page you're looking for does not exist.</p>
      )}
    </>
  );
}
