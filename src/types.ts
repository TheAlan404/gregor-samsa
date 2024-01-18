export const GENESIS: string = "Genesis";

export interface Block {
    hash: () => string,
}

export interface Vertex {
    id: string,
}

export interface Edge {
    // Past block id
    from: string,
    // Present block id
    to: string,
}

export interface ClientData {
    vertices: Vertex[],
    edges: Edge[],
}
