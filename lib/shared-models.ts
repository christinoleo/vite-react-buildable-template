/*************** schema format from the backend *************** */
/** Schema type, consist of nodes and edges */
export type SchemaFromBackend = {
  edges: Edge[];
  nodes: Node[];
};

/** Attribute type, consist of a name */
export type Attribute = {
  name: string;
  type: 'string' | 'int' | 'bool' | 'float';
};

/** Node type, consist of a name and a list of attributes */
export type Node = {
  name: string;
  attributes: Attribute[];
};

/** Edge type, consist of a name, start point, end point and a list of attributes */
export type Edge = {
  name: string;
  to: string;
  from: string;
  collection: string;
  attributes: Attribute[];
};