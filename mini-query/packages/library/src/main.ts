class MiniQuery {
  private element: Element[];
  constructor(selector: string, container?: Element) {
    this.element = Array.from((container ?? document).querySelectorAll(selector));
  }

  length() {
    return this.element.length;
  }
}

export const $ = (selector: string, container?: Element) => {
  return new MiniQuery(selector, container);
};
