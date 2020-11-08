/** @jsxImportSource @emotion/core */
import BoxLayout from '../BoxLayout';
import Button from '../Button';

import heroSrc from '../../assets/images/undraw_Around_the_world_re_n353.svg';
import {
  descriptionStyle,
  heroIllustrationStyle,
  mainMenuContainerStyle,
} from './style';

function MainMenu() {
  return (
    <BoxLayout>
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
        <Button className="yellow">Start Game</Button>
      </section>
    </BoxLayout>
  );
}

export default MainMenu;
