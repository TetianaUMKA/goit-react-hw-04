import { Circles } from "react-loader-spinner";

import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <Circles
        height="120"
        width="120"
        color="#8d8de8"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
