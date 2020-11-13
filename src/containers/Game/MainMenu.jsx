/** @jsxImportSource @emotion/core */
import Button from '../../components/Button';
import heroSrc from '../../assets/images/undraw_Around_the_world_re_n353.svg';

import {
  descriptionStyle,
  heroIllustrationStyle,
  mainMenuContainerStyle,
} from './style';

function MainMenu({ onStartGameClick }) {
  return (
    <>
      <section css={mainMenuContainerStyle}>
        <img
          alt="game illustration by undraw"
          src={heroSrc}
          css={heroIllustrationStyle}
        />
        <p css={descriptionStyle}>
          Test your knowledge about the countries around the world
        </p>
      </section>
      <section>
        <Button className="yellow" onClick={onStartGameClick}>
          Start Game
        </Button>
      </section>
    </>
  );
}

export default MainMenu;
