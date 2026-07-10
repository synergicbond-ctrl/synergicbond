# NEET Chemistry PYQ Import Audit

Generated: 2026-07-10T02:54:15.021Z

## Source Audit

- Extracted TSX files audited: 50
- Raw records found by parser: 1440
- Manifest claimed records: 1440
- Accepted normalized records: 972
- Rejected records: 468

## Rejection Rules

- Rejected malformed records with missing fields, invalid answer keys, missing four-option structure, duplicated normalized stems/options, source-book page tails, publisher/page branding, placeholder markers, unmapped chapters, and visibly corrupted extraction glyphs.
- Raw solution prose was not copied into the generated database. Generated explanations use a Synergic Bond structure: concept, necessary steps, and answer-key check.
- All imported records remain `NEEDS_MANUAL_REVIEW` until a subject expert verifies the official key and solution reasoning question-by-question.
- Source-book order is not used. The generated master is sorted by year, chapter, and stable content hash.
- Redox Reactions and Electrochemistry was split by chemistry keywords; ambiguous combined records were rejected.

## Rejection Summary

- corrupted extraction glyphs: 394
- missing or malformed four options: 77
- missing required field: 19
- invalid year: 19
- unmapped or ambiguous chapter: 10
- source-book page tail: 7
- question stem too short after option extraction: 7
- option contains leaked solution prose or another question: 2
- publisher branding or page reference: 1

## Raw Chapter Counts

- Atomic Structure: 61
- Biomolecules, Chemistry in Everyday Life and Environmental Chemistry: 83
- Chemical Bonding and Molecular Structure: 102
- Chemical Equilibrium: 25
- Chemical Kinetics: 52
- Chemical Thermodynamics: 74
- Classification of Elements and Periodicity: 34
- Coordination Compounds: 73
- d- and f-Block Elements: 77
- Hydrocarbons: 61
- Hydrogen: 5
- Ionic Equilibrium: 59
- Isolation of Metals: 25
- Organic Chemistry - Basic Principles: 90
- Organic Compounds Containing Halogens: 26
- Organic Compounds Containing Nitrogen: 43
- Organic Compounds Containing Oxygen: 87
- p-Block Elements: 96
- Polymers: 34
- Purification and Characterisation of Organic Compounds: 15
- Redox Reactions and Electrochemistry: 63
- s-Block Elements: 37
- Solid State: 38
- Solutions: 60
- Some Basic Concepts in Chemistry: 51
- States of Matter: 42
- Surface Chemistry: 27

## Accepted Chapter Counts

- Alcohols Phenols Ethers: 11
- Aldehydes Ketones: 15
- Amines: 16
- Atomic Structure: 57
- Biomolecules: 49
- Carboxylic Acids: 9
- Chemical Bonding: 88
- Chemical Kinetics: 30
- Chemistry in Everyday Life: 10
- Coordination Compounds: 63
- d and f Block Elements: 55
- Electrochemistry: 28
- Equilibrium: 69
- General Organic Chemistry: 40
- Haloalkanes and Haloarenes: 19
- Hydrocarbons: 34
- Hydrogen: 1
- Metallurgy: 18
- p-Block Elements: 59
- Periodic Table: 30
- Polymers: 18
- Redox Reactions: 1
- s-Block Elements: 26
- Solid State: 37
- Solutions: 46
- Some Basic Concepts: 36
- States of Matter: 38
- Surface Chemistry: 26
- Thermodynamics: 43

## Accepted Year Counts

- 1988: 13
- 1989: 30
- 1990: 17
- 1991: 22
- 1992: 20
- 1993: 24
- 1994: 46
- 1995: 26
- 1996: 28
- 1997: 28
- 1998: 31
- 1999: 31
- 2000: 32
- 2001: 28
- 2002: 25
- 2003: 24
- 2004: 36
- 2005: 25
- 2006: 30
- 2007: 28
- 2008: 31
- 2009: 22
- 2010: 24
- 2011: 24
- 2012: 19
- 2013: 25
- 2014: 19
- 2015: 49
- 2016: 51
- 2017: 21
- 2018: 22
- 2019: 46
- 2020: 44
- 2021: 31

## First Rejected Samples

- NEET-PYQ-0005 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0010 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0011 (NeetPyqPart01.tsx): source-book page tail
- NEET-PYQ-0018 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0019 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0023 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0026 (NeetPyqPart01.tsx): question stem too short after option extraction
- NEET-PYQ-0030 (NeetPyqPart02.tsx): missing or malformed four options, corrupted extraction glyphs
- NEET-PYQ-0032 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0033 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0037 (NeetPyqPart02.tsx): source-book page tail
- NEET-PYQ-0040 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0042 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0043 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0045 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0047 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0052 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0053 (NeetPyqPart02.tsx): missing or malformed four options, corrupted extraction glyphs
- NEET-PYQ-0055 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0057 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0059 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0060 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0066 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0071 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0073 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0074 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0076 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0077 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0079 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0081 (NeetPyqPart03.tsx): corrupted extraction glyphs
