import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.js$/);

import '../src/index.scss'
import '../src/components/Footer/style.scss'
import '../src/components/Header/style.scss'
import '../src/components/PokemonDetail/style.scss'
import '../src/components/Pokemons/style.scss'

const req = require.context('../src/components', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
