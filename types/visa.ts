export enum Visa {
	O1 = 'o-1',
	Eb1A = 'eb1-a',
	Eb2Niw = 'eb2-niw',
	None = 'none',
}

export const visaToName: Record<Visa, string> = {
	[Visa.O1]: 'O-1',
	[Visa.Eb1A]: 'EB1-A',
	[Visa.Eb2Niw]: 'EB2-NIW',
	[Visa.None]: "I don't know",
};

export const visas: Visa[] = Object.values(Visa);
