import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const pointer = new LinkListNode(value, this.head);
    this.head = pointer;
  }

  append(value) {
    if (this.head === null) {
      this.head = new LinkListNode(value);
      return;
    }

    let pointer = this.head;
    while (pointer.next) pointer = pointer.next;

    pointer.next = new LinkListNode(value);
  }

  delete(value) {
    let pointer = this.head;
    if (pointer === null) return;

    while (pointer && pointer.next && pointer.next.value !== value) {
      // if (pointer.next.value === value) break;
      pointer = pointer.next;
    }
    pointer.next = pointer.next.next;
  }

  traverse() {
    let pointer = this.head;

    while (pointer) {
      console.log('Traversed item =======>', pointer.value);
      pointer = pointer.next;
    }
  }

  contains(value) {
    let pointer = this.head;

    while (pointer && pointer.value !== value) {
      pointer = pointer.next;
    }

    if (pointer === null) return false;
    return pointer.value === value;
  }

  length() {
    let pointer = this.head;

    if (!pointer) return 0;

    let linkLength = 0;
    while (pointer) {
      pointer = pointer.next;
      linkLength += 1;
    }

    return linkLength;
  }
}
