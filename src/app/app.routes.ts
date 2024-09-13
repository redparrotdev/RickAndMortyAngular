import { Routes } from '@angular/router';
import { CharactersViewComponent } from './views/characters-view/characters-view.component';
import { CharacterInfoViewComponent } from './views/character-info-view/character-info-view.component';
import { LocationViewComponent } from './views/location-view/location-view.component';
import { EpisodeViewComponent } from './views/episode-view/episode-view.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "characters",
        pathMatch: 'full'
    },
    {
        path: "characters",
        component: CharactersViewComponent
    },
    {
        path: "characters/:id",
        component: CharacterInfoViewComponent
    },
    {
        path: "locations",
        component: LocationViewComponent
    },
    {
        path: "episodes",
        component: EpisodeViewComponent
    }
];
