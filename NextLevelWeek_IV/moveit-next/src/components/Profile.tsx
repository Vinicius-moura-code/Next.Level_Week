import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

const foto =
  "https://avatars.githubusercontent.com/u/57529463?s=460&u=b8882e3b85ba73a0d8f5b07c6ef1fa61c0f35fbe&v=4";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={foto} alt="Vinicius Moura" />
      <div>
        <strong>Vinícius Moura</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
