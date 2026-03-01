import { buildSchema } from 'graphql';

export const schema = buildSchema(`
    type Origin {
        name: String
        url: String
    }
    
    type Location {
        name: String
        url: String
    }
    
    type Character {
        id: Int
        name: String
        bestSentence: String
        status: String
        species: String
        image: String
        origin: Origin
        location: Location
        episode: [String]
    }
    
    type Info {
        count: Int
        }
    
    type CharacterList {
        info: Info
        results: [Character]
    }
    
    type Query {
        characters: CharacterList
        character(id: Int): Character
    }
`);
