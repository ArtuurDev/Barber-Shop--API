export class UniqueEntityId {

    private _value: string

    constructor(value?: string) {
        this._value = value ?? crypto.randomUUID()
    }

    get value() {
        return this._value
    }

    public equals(id: UniqueEntityId) {
        return id.value === this.value
    }
}