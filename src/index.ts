import { ClientData, Edge, GENESIS, Vertex } from "./types";

const ExampleData: ClientData = {
    vertices: [
        { id: "Genesis" },
        { id: "B" },
        { id: "C" },
        { id: "D" },
        { id: "E" },
        { id: "F" },
        { id: "H" },
        { id: "I" },
        { id: "J" },
        { id: "K" },
        { id: "L" },
        { id: "M" },
    ],
    edges: [
        { from: "Genesis", to: "B" },
        { from: "Genesis", to: "C" },
        { from: "Genesis", to: "D" },
        { from: "Genesis", to: "E" },
        { from: "E", to: "I" },
        { from: "E", to: "H" },
        { from: "D", to: "H" },
        { from: "C", to: "H" },
        { from: "C", to: "F" },
        { from: "B", to: "F" },
        { from: "H", to: "J" },
        { from: "F", to: "J" },
        { from: "B", to: "K" },
        { from: "H", to: "K" },
        { from: "I", to: "K" },
        { from: "F", to: "M" },
        { from: "K", to: "M" },
        { from: "D", to: "L" },
        { from: "I", to: "L" },
    ],
}

export class Client {
    data: ClientData = {
        edges: [],
        vertices: [],
    };

    get(id: string): Vertex | undefined {
        return this.data.vertices.find(v => v.id == id);
    }

    past(id: string): Edge[] {
        return this.data.edges.filter(e => e.to == id);
    }

    pastRecursive(id: string): string[] {
        let past = new Set<string>();

        let add = (id: string) => {
            past.add(id);
            for (let s of this.past(id)) {
                add(s.from);
            }
        }

        add(id);

        past.delete(id);

        return [...past.values()];
    }

    tips(): Vertex[] {
        return this.data.vertices.filter(v => (
            !this.data.edges.some(e => e.from == v.id)
        ))
    }

    orderDag(id: string, k: number) {
        if (id == GENESIS)
            return [GENESIS, GENESIS];

        for(let vertex of this.tips()) {
            //let [blueSetB, orderedListB] = 
        }
    }
}


let cli = new Client();
cli.data = ExampleData;

console.log(`tips()`, cli.tips());
console.log(`past(H)`, cli.pastRecursive("H"));
