class MiniQuery {
  private element: HTMLElement[];
  constructor(selector: string) {
    this.element = Array.from(document.querySelectorAll(selector));
  }

  length() {
    return this.element.length;
  }
}

export const $ = (selector: string) => {
  return new MiniQuery(selector);
};
