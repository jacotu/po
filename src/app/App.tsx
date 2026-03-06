import { useState, useRef, useEffect } from "react";
import imgImg35391 from "../assets/0f9ca6a38b80593bc228a6d918f551348d7c895f.png";

interface Symbol {
  name: string;
  char: string;
  image: string;
  history: string;
}

const handImages: Record<string, string> = {
  gesture1: "https://images.unsplash.com/photo-1764850810260-6a58813f9b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwZ2VzdHVyZSUyMGZpbmdlcnMlMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc3MjYzNTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  gesture2: "https://images.unsplash.com/photo-1761331454826-a7b4ffd54398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwcG9pbnRpbmclMjBmaW5nZXIlMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MjYzNTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  gesture3: "https://images.unsplash.com/photo-1613759699264-542e9f3f5fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMG9wZW4lMjBwYWxtJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NzI2MzU2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  gesture4: "https://images.unsplash.com/photo-1611923973164-e0e5f7f69872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwcmFpc2VkJTIwZmluZ2VycyUyMHNwcmVhZHxlbnwxfHx8fDE3NzI2MzU2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  gesture5: "https://images.unsplash.com/photo-1684459567928-d50c76f5d8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwcXVlc3Rpb24lMjBtYXJrJTIwZ2VzdHVyZXxlbnwxfHx8fDE3NzI2MzU2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  gesture6: "https://images.unsplash.com/photo-1573484092085-afd66f8cf2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwZmlzdCUyMGNsb3NlZCUyMG1vbm9jaHJvbWV8ZW58MXx8fHwxNzcyNjM1NjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  gesture7: "https://images.unsplash.com/photo-1696542631153-749759a1032b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBoYW5kcyUyMHRvZ2V0aGVyJTIwYmxhY2slMjB3aGl0ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NzI2MzU2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
};

const symbolsData: Symbol[] = [
  {
    name: "Period", char: ".", image: imgImg35391,
    history: `The period appears minimal — a compact circle resting on the baseline — yet it carries structural authority. That authority was assembled gradually. Classical Greek texts ran in scriptura continua, without spaces or punctuation. Meaning was organised by voice. Roman signs such as the positura marked pauses in delivery, not boundaries in syntax. A dot dedicated to ending a sentence emerged later, as reading shifted from performance to silent parsing.\n\nIn the fifth century, Syriac scribes introduced the kawnyā, a baseline dot placed after a completed thought. It regulated breath within liturgical reading. By the Carolingian reforms of the eighth century, punctuation became standardised across scriptoria. The punctus versus — small, dark, anchored to the line — marked the end of a sententia. What began as a cue for breathing hardened into a boundary within text. Form and function tightened together.\n\nMedieval book production and later printing stabilised its visual proportions. Paris stationers fixed its placement at sentence endings and paired it with enlarged initials. Venetian printers reduced its diameter to maintain tonal balance on the page. Humanist grammarians linked it to the following capital letter. Closure became both semantic and visual. The dot's size, weight and position began to signal authority as much as grammar.\n\nIn the twentieth century the period entered code. ASCII assigned it 2E, embedding it in programming syntax — file extensions, decimals, object notation. In regular expressions it functions as a wildcard, capable of standing in for any character. In digital messaging, a single dot can imply finality or irritation. Across these shifts, the form remains almost unchanged. Its meaning expands, contracts, and recalibrates. A small circle continues to determine where thought is considered complete.`,
  },
  {
    name: "Comma", char: ",", image: handImages.gesture2,
    history: `The comma began as a diagonal slash drawn through or beneath text — a mark of breath, not grammar. Its name derives from the Greek komma, meaning "a cut." Aristophanes of Byzantium introduced a system of dots at different heights to indicate rhetorical pauses; the lowest, placed beneath the line, eventually gave rise to the comma's descending tail. What started as a performance cue became a syntactic instrument.\n\nMedieval scribes used the virgula suspensiva — a small oblique stroke — to signal a pause shorter than a full stop. Printers of the fifteenth century replaced this stroke with the curved hook still used today. Aldus Manutius is often credited with standardising its form, though the transition was gradual and collective. The comma's curve descended below the baseline, distinguishing it visually from the period while occupying the same horizontal space.\n\nIts rules multiplied with the expansion of print. Grammarians debated whether it marked rhythm or logic. Some advocated placing commas wherever a reader would pause; others insisted on syntactic criteria alone. The dispute was never fully resolved. Regional traditions diverged. British and American styles still differ on the serial comma — whether to insert one before the final item in a list. A single curved mark continues to generate disagreement.\n\nIn code, the comma separates values, parameters, and elements in arrays. Its role is structural, not rhetorical. Yet in prose its placement remains one of the most debated choices in editing. Few marks carry so much interpretive weight for so small a shape.`,
  },
  {
    name: "Semicolon", char: ";", image: handImages.gesture1,
    history: `The semicolon occupies an uneasy position between the comma and the full stop — a pause longer than one, shorter than the other. Its name combines the Greek semi, meaning half, and colon, meaning clause. Aldus Manutius introduced it in Venetian printing during the 1490s to separate clauses that were related but grammatically independent. It offered writers a way to link thoughts without fully severing them.\n\nEarly usage was less disciplined than modern guides suggest. Writers of the sixteenth and seventeenth centuries deployed semicolons freely, often where a comma or period might now appear. Samuel Johnson used them prolifically, as did Thomas Browne and Edward Gibbon. The semicolon signalled a leisurely, considered pace — a mark suited to long and intricate sentences. Its decline began as writing styles shortened and readers favoured clarity over elaboration.\n\nBy the nineteenth century, prescriptive grammarians began restricting its use. The sentence itself shortened. Journalism and commercial writing accelerated the shift. The semicolon came to be seen as overly literary, even affected. George Orwell's advice to simplify pushed writers toward the period. Usage manuals began framing the semicolon as optional, even unnecessary.\n\nIn programming, the semicolon terminates statements in C, Java, JavaScript, and many other languages. Omitting it causes errors. Its role there is absolute and unambiguous — the opposite of its contested status in prose. The same mark carries precision in one context and subjectivity in another.`,
  },
  {
    name: "Colon", char: ":", image: handImages.gesture3,
    history: `The colon takes its name from the Greek kolon, meaning a limb or member of a sentence. In classical rhetoric, a colon was a rhythmic unit of prose — a group of words forming a complete thought within a longer structure. The mark itself, two vertically stacked dots, emerged from manuscript tradition as a way of signalling a pause more significant than a comma but not as final as a period.\n\nMedieval scribes used the colon to introduce what followed — an explanation, a list, a quotation. Its anticipatory function distinguished it from other stops. The reader was not being told that a thought had ended, but that something was about to be added, expanded, or clarified. This directional quality — forward-pointing rather than backward-closing — shaped its evolution through the age of print.\n\nPrinters of the Renaissance retained the two-dot form while codifying its placement. It appeared before speech in dialogue, before examples in argument, before specifications in technical writing. Its grammar was loose by modern standards; writers applied it by ear as much as by rule. The colon signalled a kind of rhetorical inhale — a preparation for what was about to arrive.\n\nIn computing, the colon appears in time notation, URL structures, CSS property declarations, and dictionary-like data formats. In Python, it introduces code blocks. In terminal environments, it serves as a separator in PATH variables. Its typographic form has remained stable for centuries while its semantic range has continued to expand.`,
  },
  {
    name: "Ellipsis", char: "…", image: handImages.gesture4,
    history: `The ellipsis — three dots in a horizontal row — signals omission, incompletion, or trailing thought. Its name comes from the Greek elleipsis, meaning a falling short or a leaving out. In classical rhetoric, ellipsis referred to the grammatical omission of words that could be inferred from context. The three-dot mark formalised this practice visually, indicating where text had been removed or where a thought had not been fully articulated.\n\nIts typographic history is intertwined with editorial practice. Printers and editors used a row of dots to indicate missing passages in transcribed texts, damaged manuscripts, or strategically shortened quotations. The number of dots varied — three, four, five, or even a full line of them — before three became standard.\n\nIn fiction and dialogue, the ellipsis performs differently. It suspends rather than omits. A character's trailing sentence, an unfinished thought, a moment of hesitation — all find their mark in three dots. Writers use it to control pace, to imply emotion that language cannot fully carry.\n\nIn digital communication, the ellipsis acquired new social meaning. Typing indicators — animated dots — borrowed its form to suggest that someone is composing a reply. In text messages, a trailing ellipsis can imply disapproval, irony, or passive aggression. A mark once used to signal scholarly omission now carries affective weight in casual conversation.`,
  },
  {
    name: "Exclamation mark", char: "!", image: handImages.gesture5,
    history: `The exclamation mark — a vertical stroke above a period — is thought to derive from the Latin word io, an exclamation of joy. Scribes writing io quickly would place the i above the o, which over time compressed into the mark's current form: a line over a dot. It was from the beginning a sign of vocal intensity, of something that needed to be heard.\n\nMedieval grammarians referred to it as the punctus admirativus — the mark of wonder or admiration. It appeared in texts at moments of strong feeling, direct address, or rhetorical climax. Early printers adopted and regularised it, though its use remained relatively restrained through the sixteenth and seventeenth centuries.\n\nThe exclamation mark proliferated in the nineteenth century as popular print expanded. Advertising, political pamphlets, and popular fiction used it liberally. By the twentieth century, style guides had begun cautioning writers against overuse. Elmore Leonard famously advised allowing no more than two or three per hundred thousand words.\n\nIn digital communication, the exclamation mark has undergone rehabilitation. Without tone of voice, text risks reading as cold or abrupt. Multiple exclamation marks signal enthusiasm, warmth, or urgency. A single one after a greeting can mean nothing more than friendliness.`,
  },
  {
    name: "Question mark", char: "?", image: handImages.gesture5,
    history: `The question mark derives from the Latin word quaestio, meaning inquiry or question. Medieval scribes abbreviated it as qo, placing the q above the o. Over time, the q's tail curved and the o reduced to a dot, producing the familiar hook-and-point shape. The mark formalised what voice had previously conveyed — the rising inflection that signals a question in spoken language.\n\nIts standardisation took place gradually across European manuscript and print traditions. By the fifteenth century, the interrogativus punctus appeared regularly at the end of direct questions in Latin texts. Printers of the Renaissance adopted it and adjusted its proportions — the hook became more fluid, the dot more precisely placed.\n\nRhetoricians of the sixteenth and seventeenth centuries explored the question mark's limits. Could it apply to rhetorical questions — those that implied their own answers? Should it appear in indirect questions, which grammatically were statements? Style guides offered conflicting answers. Spanish inverted the mark at the beginning of a question — ¿ — to prepare the reader earlier.\n\nIn digital communication, the question mark multiplied. Multiple marks intensify urgency or disbelief. In search syntax, it functions as a wildcard. In URLs, it separates the path from query parameters. A single curved stroke continues to open space — semantic, social, technical — for what is not yet known.`,
  },
  {
    name: "Quotation marks", char: "\"\"", image: handImages.gesture7,
    history: `Quotation marks — curved paired symbols that frame reported speech or cited text — have a fragmented typographic history. Their precursor was the diple, a chevron-shaped mark placed in manuscript margins to indicate notable passages. The marks moved from margin to inline position as printing developed, eventually enclosing rather than pointing toward the quoted material.\n\nEuropean printing traditions diverged. French guillemets — angled double arrows — pointed inward or outward depending on national convention. German styles dropped the opening mark below the baseline. English printing settled on curved commas. These variations still exist and reflect distinct typographic histories rather than different understandings of quotation itself.\n\nTheir semantic function extended beyond citation. In prose, quotation marks began to signal irony, distance, or scepticism — what linguists call scare quotes. Placing a word in marks indicates that the writer does not endorse its ordinary meaning. The marks create a gap between the word and the writer's voice.\n\nIn programming, quotation marks delimit string literals. Single and double marks often carry different functions depending on the language. Their placement is absolute; a mismatched or missing mark causes an error. In JSON, only double marks are valid. The same curved shapes carry certainty in one context, ambiguity in another.`,
  },
  {
    name: "Parentheses", char: "()", image: handImages.gesture3,
    history: `Parentheses — the paired curved brackets that enclose supplementary material — take their name from the Greek parentithenai, meaning to put in beside. Their function has always been one of insertion: placing something within a sentence without fully integrating it into the sentence's structure. The enclosed material is present but conditional — relevant but removable.\n\nTheir typographic origins lie in the manuscript tradition of adding glosses and annotations. Scribes needed a way to include explanatory notes within running text without interrupting its flow. The curved form — open on one side — invited the reader in and then released them back to the main line.\n\nWriters have exploited the parenthesis for tonal effects far beyond mere clarification. A phrase in parentheses can undercut the preceding statement, introduce irony, or reveal what the main sentence withholds. The aside in drama finds its textual equivalent in the parenthetical.\n\nIn mathematics and programming, parentheses enforce order of operations and group expressions. Their function is logical rather than rhetorical, but the structural principle is the same: to delimit and contain. A parenthesis opened must be closed. In code, failure to match them causes immediate errors.`,
  },
  {
    name: "Slash", char: "/", image: handImages.gesture1,
    history: `The slash — a diagonal stroke running from lower left to upper right — is among the oldest marks in written language. The virgule, its ancestor, served as a pause marker in medieval manuscripts before the comma assumed that role. As the comma displaced it in prose punctuation, the slash migrated toward other functions, becoming a mark of alternatives, fractions, and abbreviations.\n\nIn early modern print, the slash appeared in dates, fractions, and abbreviated units of measure. It marked the boundary between numerator and denominator, between day and month, between one unit and another. Its diagonal form made it visually distinct from the vertical bar and the horizontal hyphen.\n\nThe and/or construction extended its use in twentieth-century writing. Academic prose, legal documents, and administrative language adopted it for either/or propositions. Style guides often discouraged this usage, arguing that the slash was a shortcut, a mark of imprecision.\n\nIn computing, the slash became structural. Forward slash separates directories in Unix file paths and URLs. In HTML, it closes tags. In regular expressions, it delimits patterns. The backslash, its mirror, functions as an escape character. Two related diagonal strokes carry opposite technical meanings.`,
  },
  {
    name: "Apostrophe", char: "'", image: handImages.gesture2,
    history: `The apostrophe — a superscript comma — marks elision and possession in English, though its history in both functions is more complicated than its current rules suggest. Its name comes from the Greek apostrophos, meaning a turning away. It was used in classical Greek to mark the omission of a vowel at the end of a word when the following word began with a vowel.\n\nIn early English printing, the apostrophe appeared inconsistently. Through the seventeenth and eighteenth centuries, constructions like "the kings crown" and "the king's crown" coexisted, with no settled convention. Grammarians of the eighteenth century began insisting on the apostrophe as a possessive marker, connecting it — incorrectly, many linguists now argue — to a supposed elision of the pronoun his.\n\nIts misuse has generated peculiar social anxiety. The greengrocer's apostrophe — plurals incorrectly marked with an apostrophe — became a symbol of illiteracy. The Apostrophe Protection Society, founded in Britain in 2001, was dissolved by its founder in 2019, on the grounds that the fight had been lost.\n\nIn programming, single quotation marks enclose string literals in many languages. Its role in code is syntactic and unambiguous, unlike its contested career in prose. A mark of elision became a mark of possession, then a delimiter, then a cultural signifier.`,
  },
  {
    name: "Crux", char: "†", image: handImages.gesture4,
    history: `The crux — a dagger-shaped reference mark — takes its name from the Latin word for cross. In manuscript tradition it indicated a gloss, a correction, or a problem in the text. Scribes placed it beside words that were corrupt, uncertain, or in need of explanation. Its vertical stroke and horizontal bar recalled the cruciform shape, lending the mark an air of gravity.\n\nIn classical scholarship, the crux desperationis — the cross of despair — marked passages that editors could not reconstruct with confidence. A word enclosed between two daggers indicated a textual crux: a reading so uncertain that no single emendation could be offered. Scholarship admitted its own uncertainty.\n\nPublishing adopted the dagger as a footnote reference mark, paired with the double dagger when a second note appeared on the same page. In this function it lost its scholarly connotation of corruption and became merely a pointer — directing the reader's eye downward from text to annotation.\n\nIn modern usage the crux marks dates of death in biographical notation, appearing beside a name to indicate that the person is deceased. The same mark that once flagged uncertainty now signals conclusion.`,
  },
];

const forgottenData: Record<string, { char: string; image: string; history: string }> = {
  "Andorpersand": { char: "&", image: handImages.gesture7, history: `The ampersand derives from the ligature of the Latin et, meaning and. The form visible in the & symbol is a compressed et, its letters merged into a single flowing shape. The word ampersand comes from "and per se and," meaning "& by itself means and" — a phrase recited in alphabetic lessons of the nineteenth century where the symbol followed Z as the 27th character.\n\nThe ligature was in use among Roman scribes, appearing in Pompeian graffiti and cursive manuscripts. Its form varied widely: some versions preserved both letters legibly; others compressed them into abstract curves. The italic ampersand — still recognisably et in form — and the roman ampersand — more abstract — both persist in contemporary type families.\n\nIn formal writing it was gradually displaced by the word and. Style guides discouraged it in continuous prose, reserving it for business names and design contexts. Yet it persisted in titles, signage, and partnership names — Marks & Spencer, Dolce & Gabbana — where the visual rhythm of the mark matched the rhythm of the named relationship.\n\nIn programming languages, the ampersand functions as the bitwise AND operator, the reference operator in C and C++, and the string concatenation operator in some languages. In HTML, it begins character entity references. A ligature born from scribal speed now performs logical operations.` },
  "Asterism": { char: "⁂", image: handImages.gesture1, history: `The asterism — three asterisks arranged in a triangular formation — served as a section divider in printed texts. Its name comes from the Greek asterismos, referring to a grouping of stars. In astronomy, an asterism is a pattern of stars, sometimes forming part of a larger constellation, sometimes standing independently.\n\nIts use in printing peaked in the nineteenth and early twentieth centuries. Publishers deployed it to separate sections within a chapter, to signal a shift in time or scene, or to mark a thematic break that did not warrant a full heading. Three spaced asterisks served the same function and were easier to set in type.\n\nThe mark appeared in scholarly and literary publishing, less frequently in commercial or popular print. It carried an air of typographic refinement. As typesetting moved from metal to digital, ornamental marks became easier to include but were used less often.\n\nThe asterism now occupies the category of marks known but not used — present in character sets, recognised by those with typographic knowledge, but absent from the work of most editors and designers.` },
  "Irony Mark": { char: "⸮", image: handImages.gesture4, history: `The irony mark — a reversed question mark — is among the most frequently proposed but least successfully adopted punctuation marks in Western writing. The French poet Alcanter de Brahm proposed a percontation mark in 1899. Henry Denham had proposed a similar mark in England in the 1580s. Both attempts failed to gain traction.\n\nThe irony mark assumes that irony requires disambiguation — that readers cannot be trusted to detect it without a signal. This assumption is contested. Writers and rhetoricians have long argued that irony depends on context, tone, and shared knowledge. A mark that announces irony destroys it.\n\nVarious twentieth-century designers proposed alternatives: a wavy underline, a dot with a tail, a symbol resembling a sinuous line. The digital era produced the tonal tag — the /s marker used in online writing to indicate sarcasm. None achieved widespread adoption outside specific communities.\n\nThe repeated failure of the irony mark illuminates something about punctuation: marks succeed when they resolve genuine ambiguity that language cannot otherwise manage. Irony's ambiguity is often its point.` },
  "Love Point": { char: "❤", image: handImages.gesture7, history: `The love point — attributed to the French poet Hervé Bazin in his 1966 essay Plumons l'Oiseau — was proposed as one of six new punctuation marks. Bazin imagined a mark combining two question marks face to face, forming a heart-like shape, to indicate sentiments of affection and tenderness in written text.\n\nBazin's proposal existed in a tradition of punctuation reform that stretches back centuries. Writers and theorists repeatedly identified emotions that the existing set of marks could not adequately signal. Most proposals shared the same fate: discussed, occasionally printed, and then quietly forgotten.\n\nThe heart symbol, which the love point resembled, has an older and independent history. Its use in romantic and religious contexts predates Bazin's proposal by centuries. The symbol's power derives from accumulated association rather than natural resemblance.\n\nIn digital communication, the heart emoji accomplished what Bazin's love point could not. Its adoption was rapid and global, unmediated by style guides or grammatical authority. The function survived; the typographic form transformed entirely.` },
  "Snark Mark": { char: ".,", image: handImages.gesture2, history: `The snark mark — proposed by writer and typographer Choz Cunningham in 2010 — is a period followed immediately by a comma, forming a single compound sign to indicate sarcasm in written text. Its name invokes both snark, a portmanteau of snide and remark, and Lewis Carroll's nonsense creature the Snark.\n\nThe proposal emerged in the context of a broader informal search for a sarcasm mark. Online communities had been experimenting with textual solutions — the /s tag borrowed from HTML closing syntax, the tilde used in certain communities to imply the opposite of what was stated.\n\nLike most proposed punctuation, the snark mark spread among enthusiasts but failed to achieve general adoption. Its visual form — a period and comma run together — is easy to compose in any text editor. Ease of production did not, however, produce widespread use.\n\nThe persistence of proposals for sarcasm marks reflects a genuine communicative need. Digital text strips away tone of voice, facial expression, and gestural context. The snark mark remains a proposal — earnest in intent, and perhaps, in its obscurity, a little ironic.` },
  "Demicolon": { char: "⁏", image: handImages.gesture3, history: `The demicolon — a mark combining elements of the period and comma — belongs to the category of proposed marks that exist more robustly in theory than in practice. Various writers and typographers have used the term to describe a pause intermediate between existing stops, filling a gap they perceived in the available hierarchy.\n\nMedieval scribal practice included several marks that functioned in this intermediate range. The punctus elevatus — a dot with a rising stroke — signalled a pause longer than a comma and shorter than a full stop. The printing press reduced the variety of available stops, collapsing several medieval marks into the four that remain in common use today.\n\nThe case for a demicolon rests on the argument that existing marks leave a gap. Some constructions fall between available options — linked but not quite independent, separated but not quite coordinate. A formalised demicolon would allow a third option.\n\nThe demicolon has not yet found its moment of collective recognition. The punctuation system has always been incomplete, and the demicolon marks one of the places where incompleteness is most visible.` },
};

const rememberedNames = ["Period","Comma","Semicolon","Colon","Ellipsis","Exclamation mark","Question mark","Quotation marks","Parentheses","Slash","Apostrophe","Crux"];
const forgottenNames = ["Andorpersand","Asterism","Acclamation Point","Authority Point","Certitude Point","Doubt Point","ElRey","Exclamation Comma","Hemidemisemicolon","Ironieteken","Irony Mark","Love Point","Mockquotation Marks","Period (Friendly)","Period (Impartial)","Question Comma","Rhetorical Mark","Sarcastisies","SarcMark","Sinceroid","Snark Mark","Snark Mark (Variant)","Demicolon","Superellipses"];
const objectedNames = ["Consent Point","Refusal Mark","Ambivalence Point","Deference Mark","Insistence Point"];

function getSymbol(name: string): Symbol {
  const rem = symbolsData.find(s => s.name === name);
  if (rem) return rem;
  const forg = forgottenData[name];
  if (forg) return { name, ...forg };
  return {
    name,
    char: name.slice(0, 2),
    image: handImages.gesture1,
    history: `The ${name} is one of the more enigmatic marks in the history of written language. Proposed at various points across several centuries, it never achieved widespread adoption, yet it continued to attract the interest of typographers, writers, and language reformers.\n\nIts form was debated; its function was disputed; its necessity was never conclusively established. It exists at the edge of the punctuation system — known to specialists, invisible to most readers.\n\nThe circumstances of its proposal reflect the recurring human impulse to improve on existing communicative tools. Writers throughout history have encountered moments when the available marks seemed insufficient.\n\nThe ${name} remains in circulation among those interested in the history and future of punctuation. Whether it will ever achieve the adoption its proposers imagined is uncertain. The punctuation system has always been incomplete.`,
  };
}

export default function App() {
  const SITE_PASSWORD = "jacotu";
  const PASSWORD_STORAGE_KEY = "punctum-obscurum-site-password";
  const [selected, setSelected] = useState<Symbol>(symbolsData[0]);
  const [fadeKey, setFadeKey] = useState(0);
  const [hoverZone, setHoverZone] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileTab, setMobileTab] = useState<"list" | "history">("list");
  const [isMobile, setIsMobile] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [highlightFontCredit, setHighlightFontCredit] = useState(false);
  const [colophonOpen, setColophonOpen] = useState(false);
  const mobileTouchStartX = useRef<number | null>(null);

  const COLOPHON_TEXT = `This research explores punctuation as a minor but significant aspect of written communication. The project collects historical and experimental examples of punctuation marks, both standardised and experimental, in order to examine how minimal graphic symbols organise reading, understanding, and tone. Each punctuation mark is treated as a functional tool whose shape, placement on the line, and typographical weight correspond to a specific communicative purpose. By gathering these marks within a common framework, the study examines how punctuation has evolved to accommodate new types of textual complexity: pauses for spoken reading, syntactical boundaries for silent reading, and indicators of tone in contemporary digital communication.

The investigation also considers how proposed punctuation marks reflect moments when existing systems seem insufficient. Many of these signs were designed to indicate irony, certainty, affection, or skepticism - states that conventional punctuation leaves implicit. Their visual construction often adapts familiar components such as the period, comma, or question mark, preserving legibility while attempting to encode additional meaning.

Read together, these experiments reveal punctuation as an evolving system shaped by technological constraints, typographic standards, and shifting expectations about how written language conveys intention. Therefore, the study approaches punctuation not simply as grammar, but as a set of graphic tools through which culture negotiates clarity, authority, and tone.`;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedPassword = window.localStorage.getItem(PASSWORD_STORAGE_KEY);
    if (savedPassword === SITE_PASSWORD) setIsUnlocked(true);
  }, [PASSWORD_STORAGE_KEY, SITE_PASSWORD]);

  // Crossfade image state
  const [currentImg, setCurrentImg] = useState(symbolsData[0].image);
  const [prevImg, setPrevImg] = useState<string | null>(null);
  const [imgFading, setImgFading] = useState(false);
  const fadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelect = (name: string) => {
    const sym = getSymbol(name);
    setPrevImg(currentImg);
    setCurrentImg(sym.image);
    setImgFading(true);
    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => {
      setPrevImg(null);
      setImgFading(false);
    }, 900);
    setSelected(sym);
    setFadeKey(k => k + 1);
    if (isMobile) setMobileTab("history");
  };

  const handleZoneEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHoverZone(true), 700);
  };

  const handleZoneLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setHoverZone(false);
  };

  const handleUnlock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passwordValue === SITE_PASSWORD) {
      window.localStorage.setItem(PASSWORD_STORAGE_KEY, SITE_PASSWORD);
      setIsUnlocked(true);
      setPasswordError("");
      return;
    }
    setPasswordError("Incorrect password");
  };

  const handleMobileContentTouchStart = (e: React.TouchEvent) => {
    mobileTouchStartX.current = e.touches[0].clientX;
  };
  const handleMobileContentTouchEnd = (e: React.TouchEvent) => {
    if (mobileTouchStartX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const delta = endX - mobileTouchStartX.current;
    const threshold = 50;
    if (delta < -threshold && mobileTab === "list") setMobileTab("history");
    if (delta > threshold && mobileTab === "history") setMobileTab("list");
    mobileTouchStartX.current = null;
  };

  const LEFT_W = 350;
  const RIGHT_W = 350;
  const CARD_H = 800;
  const PHOTO_EDGE = "47vw";
  const FONT_SLAB = "var(--font-abc-daily-slab)";
  const FONT_MONO = "var(--font-abc-daily-slab-mono)";
  const LABEL_COLOR = "rgba(113,115,119,0.72)";
  const TEXT_COLOR = "#61656c";
  const EASE_GENTLE = "cubic-bezier(0.22, 1, 0.36, 1)";
  const LEFT_CARD_SHADOW = "3px 4px 14px rgba(0,0,0,0.18)";
  const RIGHT_CARD_SHADOW = "10px 4px 14px -10px rgba(0,0,0,0.22)";
  const ALL_SYMBOL_NAMES = [...rememberedNames, ...forgottenNames, ...objectedNames];
  const currentPage = Math.max(ALL_SYMBOL_NAMES.indexOf(selected.name) + 1, 1);
  const shouldAnimateFlow = selected.name.length > 16;

  if (!isUnlocked) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f4f1ea 0%, #ece7de 100%)",
          color: "#61656c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <form
          onSubmit={handleUnlock}
          style={{
            width: "min(420px, 100%)",
            background: "rgba(250,248,243,0.96)",
            boxShadow: "10px 14px 32px rgba(0,0,0,0.08)",
            border: "1px solid rgba(113,115,119,0.12)",
            padding: "28px 24px 24px 24px",
          }}
        >
          <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR, lineHeight: 1.6, margin: 0 }}>Access</p>
          <h1 style={{ fontFamily: FONT_MONO, fontSize: 30, color: "#717377", lineHeight: 1.1, margin: "4px 0 14px 0", fontWeight: 400 }}>Punctum Obscurum</h1>
          <p style={{ fontFamily: FONT_SLAB, fontSize: 14, color: TEXT_COLOR, lineHeight: 1.65, letterSpacing: "0.01em", margin: "0 0 18px 0" }}>
            Enter the password to continue.
          </p>
          <label style={{ display: "block", fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR, lineHeight: 1.6, marginBottom: 6 }}>
            Password
          </label>
          <input
            type="password"
            value={passwordValue}
            onChange={(event) => {
              setPasswordValue(event.target.value);
              if (passwordError) setPasswordError("");
            }}
            style={{
              width: "100%",
              fontFamily: FONT_MONO,
              fontSize: 16,
              color: "#4f5358",
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(113,115,119,0.18)",
              borderRadius: 0,
              padding: "12px 14px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <div style={{ minHeight: 20, marginTop: 10 }}>
            {passwordError ? (
              <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#8c5d63", lineHeight: 1.6, margin: 0 }}>{passwordError}</p>
            ) : null}
          </div>
          <button
            type="submit"
            style={{
              marginTop: 6,
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: "#faf8f3",
              background: "#61656c",
              border: "none",
              padding: "12px 16px",
              cursor: "pointer",
            }}
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  // ─── MOBILE ──────────────────────────────────────────────
  if (isMobile) {
    return (
      <div style={{ minHeight: "100vh", background: "#faf8f3", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top: split photo + symbol */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "stretch" }}>
          {/* Left half: full vertical photo, no crop */}
          <div style={{ width: "50%", position: "relative" }}>
            {/* Current image defines the natural height */}
            <img
              key={fadeKey + "-m-img"}
              src={currentImg}
              alt={selected.name}
              className="grayscale"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {/* Previous image fades out absolutely on top */}
            {prevImg && (
              <img
                src={prevImg}
                alt=""
                className="grayscale"
                style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover",
                  opacity: imgFading ? 0 : 1,
                  transition: `opacity 0.85s ${EASE_GENTLE}`,
                  zIndex: 1,
                }}
              />
            )}
          </div>
          {/* Right half: big symbol */}
          <div style={{ width: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span
              key={fadeKey + "-m-char"}
              style={{
                fontFamily: FONT_SLAB,
                fontSize: "clamp(60px, 16vw, 130px)",
                color: "#535252",
                lineHeight: 1,
                animation: `charFade 0.28s ${EASE_GENTLE}`,
                userSelect: "none",
              }}
            >
              {selected.char}
            </span>
          </div>
        </div>

        {/* Header strip */}
        <div style={{ background: "#faf8f3", padding: "12px 18px 0 18px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
            <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR }}>Symbol</span>
            <span style={{ minHeight: "2.6em", display: "inline-block", verticalAlign: "bottom" }}>
              <span
                key={fadeKey + "-mobile-name"}
                style={{
                  display: "inline-block",
                  fontFamily: FONT_MONO,
                  fontSize: 22,
                  color: "#717377",
                  fontWeight: 400,
                  animation: `titleSoft 0.22s ${EASE_GENTLE}`,
                }}
              >
                {selected.name}
              </span>
            </span>
          </div>
          {/* Tabs */}
          <div className="mobile-tab-bar" style={{ display: "flex", gap: 0, borderBottom: "1px solid #e0ddd7" }}>
            {(["list", "history"] as const).map(tab => (
              <button
                key={tab}
                type="button"
                onClick={() => setMobileTab(tab)}
                className={mobileTab === tab ? "mobile-tab mobile-tab--active" : "mobile-tab"}
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  background: "none",
                  border: "none",
                  padding: "6px 14px 0 0",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  marginBottom: -1,
                }}
              >
                <span className="mobile-tab__label">{tab === "list" ? "Index" : "History"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content area — swipeable Index / History */}
        <div
          style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", minHeight: 0 }}
          onTouchStart={handleMobileContentTouchStart}
          onTouchEnd={handleMobileContentTouchEnd}
        >
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              width: "200%",
              transform: mobileTab === "history" ? "translateX(-50%)" : "translateX(0)",
              transition: `transform 0.56s ${EASE_GENTLE}`,
            }}
          >
            {/* Panel 1: Index */}
            <div style={{ flex: "0 0 50%", minWidth: 0, display: "flex", flexDirection: "column", background: "#faf8f3" }}>
              <div style={{ flex: 1, overflowY: "auto", padding: "14px 18px 8px 18px" }}>
                <div style={{ display: "flex", gap: 0 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR, margin: "0 0 6px 0", lineHeight: 1.6 }}>Remembered</p>
                    {rememberedNames.map(name => (
                      <button key={name} onClick={() => handleSelect(name)}
                        style={{ display: "block", fontFamily: FONT_MONO, fontSize: 11, lineHeight: 1.85, color: selected.name === name ? "#2a2d31" : "#61656c", fontWeight: 400, background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left", transition: `color 220ms ${EASE_GENTLE}, transform 220ms ${EASE_GENTLE}`, transform: selected.name === name ? "translateX(2px)" : "translateX(0)" }}>
                        {name}
                      </button>
                    ))}
                    <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR, margin: "1.85em 0 0 0", lineHeight: 1.85 }}>Objected</p>
                    {objectedNames.map(name => (
                      <button key={name} onClick={() => handleSelect(name)}
                        style={{ display: "block", fontFamily: FONT_MONO, fontSize: 11, lineHeight: 1.85, color: selected.name === name ? "#2a2d31" : "#61656c", fontWeight: 400, background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%", transition: `color 220ms ${EASE_GENTLE}, transform 220ms ${EASE_GENTLE}`, transform: selected.name === name ? "translateX(2px)" : "translateX(0)" }}>
                        {name}
                      </button>
                    ))}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR, margin: "0 0 6px 0", lineHeight: 1.6 }}>Forgotten</p>
                    {forgottenNames.map(name => (
                      <button key={name} onClick={() => handleSelect(name)}
                        style={{ display: "block", fontFamily: FONT_MONO, fontSize: 11, lineHeight: 1.85, color: selected.name === name ? "#2a2d31" : "#61656c", fontWeight: 400, background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%", transition: `color 220ms ${EASE_GENTLE}, transform 220ms ${EASE_GENTLE}`, transform: selected.name === name ? "translateX(2px)" : "translateX(0)" }}>
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid #e0ddd7", padding: "10px 18px 14px 18px", display: "flex", gap: 0, background: "#faf8f3", flexShrink: 0 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0, opacity: highlightFontCredit ? 0.5 : 1, transition: `opacity 180ms ${EASE_GENTLE}` }}>Written using</p>
                  <a
                    href="https://abcdinamo.com/typefaces/daily"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setHighlightFontCredit(true)}
                    onMouseLeave={() => setHighlightFontCredit(false)}
                    onFocus={() => setHighlightFontCredit(true)}
                    onBlur={() => setHighlightFontCredit(false)}
                    style={{ display: "block", fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0, textDecoration: "none", padding: 0 }}
                  >
                    ABC Daily Slab
                  </a>
                  <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0, opacity: highlightFontCredit ? 0.5 : 1, transition: `opacity 180ms ${EASE_GENTLE}` }}>by ABC Dinamo</p>
                </div>
                <div style={{ flex: 1 }}>
                  <button type="button" onClick={() => { setColophonOpen(true); setMobileTab("history"); }} style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0, background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left", display: "block" }}>Colophon</button>
                  <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0 }}>Design</p>
                  <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0 }}>Buy newspaper</p>
                </div>
              </div>
            </div>
            {/* Panel 2: History / Colophon */}
            <div key={colophonOpen ? "colophon" : fadeKey + "-m-panel"} style={{ flex: "0 0 50%", minWidth: 0, display: "flex", flexDirection: "column", background: "#f3f1ed" }}>
              <div style={{ flex: 1, overflowY: "auto", padding: "18px 18px 32px 18px", fontFamily: FONT_SLAB, fontSize: 13, color: TEXT_COLOR, lineHeight: "22px", letterSpacing: "0.015em", whiteSpace: "pre-line", animation: `mobileHistoryIn 0.5s ${EASE_GENTLE} both` }}>
                {colophonOpen ? (
                  <>
                    <button type="button" onClick={() => setColophonOpen(false)} style={{ display: "block", fontFamily: FONT_MONO, fontSize: 11, color: "#717377", background: "none", border: "none", padding: 0, marginBottom: 16, cursor: "pointer" }}>Close</button>
                    <span style={{ display: "block" }}>{COLOPHON_TEXT}</span>
                  </>
                ) : (
                  selected.history
                )}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .mobile-tab-bar .mobile-tab { color: rgba(113,115,119,0.5) !important; font-weight: 400 !important; }
          .mobile-tab-bar .mobile-tab--active { color: #717377 !important; font-weight: 400 !important; }
          .mobile-tab-bar .mobile-tab__label { padding-bottom: 5px; border-bottom: 1.5px solid transparent; display: inline-block; box-sizing: border-box; }
          .mobile-tab-bar .mobile-tab--active .mobile-tab__label { border-bottom-color: #717377; }
          @keyframes charFade { from { opacity: 0.7; } to { opacity: 1; } }
          @keyframes textFade { from { opacity: 0.85; } to { opacity: 1; } }
          @keyframes mobileHistoryIn { from { opacity: 0.96; } to { opacity: 1; } }
        `}</style>
      </div>
    );
  }

  // ─── DESKTOP ─────────────────────────────────────────────
  return (
    <div className="relative bg-white overflow-hidden" style={{ minHeight: "100vh", width: "100%" }}>
      {/* Background */}
      <div className="absolute inset-0 flex">
        <div
          className="relative overflow-hidden"
          style={{ width: "47%", cursor: "default" }}
          onMouseEnter={handleZoneEnter}
          onMouseLeave={handleZoneLeave}
        >
          {prevImg && (
            <img
              src={prevImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover grayscale"
              style={{
                opacity: imgFading ? 0 : 1,
                transition: `opacity 0.85s ${EASE_GENTLE}`,
                zIndex: 1,
              }}
            />
          )}
          <img
            src={currentImg}
            alt={selected.name}
            className="absolute inset-0 w-full h-full object-cover grayscale"
            style={{
              opacity: 1,
              transition: `opacity 0.85s ${EASE_GENTLE}`,
              zIndex: 2,
            }}
          />
        </div>
        <div style={{ flex: 1, background: "white" }} />
      </div>

      {/* Big symbol on the right */}
      <div
        className="absolute flex items-center justify-center select-none"
        style={{ right: 0, top: 0, width: "53%", height: "100vh", cursor: "default" }}
        onMouseEnter={handleZoneEnter}
        onMouseLeave={handleZoneLeave}
      >
        <span
          key={fadeKey + "-char"}
          style={{
            fontFamily: FONT_SLAB,
            fontSize: "clamp(160px, 24vw, 420px)",
            color: "#535252",
            lineHeight: 1,
            animation: `bigCharFade 0.42s ${EASE_GENTLE}`,
          }}
        >
          {selected.char}
        </span>
      </div>

      {/* Floating cards — seam at 47vw, centered vertically */}
      <div
        style={{
          position: "absolute",
          left: `calc(${PHOTO_EDGE} - ${LEFT_W}px)`,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          zIndex: 10,
          opacity: hoverZone ? 0 : 1,
          transition: `opacity 0.5s ${EASE_GENTLE}`,
          pointerEvents: hoverZone ? "none" : "auto",
        }}
      >
        {/* LEFT card: navigation */}
        <div
          style={{
            width: LEFT_W,
            height: CARD_H,
            background: "rgba(250,248,243,0.95)",
            boxShadow: LEFT_CARD_SHADOW,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <div style={{ padding: "22px 20px 0 20px" }}>
            <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR, lineHeight: 1.6, margin: 0 }}>Symbol</p>
            <p
              key={fadeKey + "-desktop-name"}
              style={{
                fontFamily: FONT_MONO,
                fontSize: 28,
                color: "#717377",
                lineHeight: 1.2,
                fontWeight: 400,
                textWrap: "balance",
                margin: "2px 0 14px 0",
                animation: `titleSoft 0.22s ${EASE_GENTLE}`,
              }}
            >
                {selected.name}
            </p>
          </div>

          <div
            key={shouldAnimateFlow ? `desktop-index-two-${fadeKey}` : "desktop-index-one"}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "0 20px 24px 20px",
              display: "flex",
              flexDirection: "column",
              animation: shouldAnimateFlow ? `flowSettle 0.24s ${EASE_GENTLE}` : "none",
            }}
          >
            <div style={{ display: "flex", gap: 0, flex: 1 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR, margin: "0 0 6px 0", lineHeight: 1.6 }}>Remembered</p>
                {rememberedNames.map(name => (
                  <button
                    key={name}
                    onClick={() => handleSelect(name)}
                    style={{
                      display: "block",
                      fontFamily: FONT_MONO,
                      fontSize: 11,
                      lineHeight: 1.85,
                      color: selected.name === name ? "#2a2d31" : "#61656c",
                      fontWeight: 400,
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                      transition: `color 220ms ${EASE_GENTLE}, transform 220ms ${EASE_GENTLE}`,
                      transform: selected.name === name ? "translateX(2px)" : "translateX(0)",
                    }}
                  >
                    {name}
                  </button>
                ))}
                <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR, margin: "1.85em 0 0 0", lineHeight: 1.85 }}>Objected</p>
                {objectedNames.map(name => (
                  <button
                    key={name}
                    onClick={() => handleSelect(name)}
                    style={{
                      display: "block",
                      fontFamily: FONT_MONO,
                      fontSize: 11,
                      lineHeight: 1.85,
                      color: selected.name === name ? "#2a2d31" : "#61656c",
                      fontWeight: 400,
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                      transition: `color 220ms ${EASE_GENTLE}, transform 220ms ${EASE_GENTLE}`,
                      transform: selected.name === name ? "translateX(2px)" : "translateX(0)",
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: LABEL_COLOR, margin: "0 0 6px 0", lineHeight: 1.6 }}>Forgotten</p>
                {forgottenNames.map(name => (
                  <button
                    key={name}
                    onClick={() => handleSelect(name)}
                    style={{
                      display: "block",
                      fontFamily: FONT_MONO,
                      fontSize: 11,
                      lineHeight: 1.85,
                      color: selected.name === name ? "#2a2d31" : "#61656c",
                      fontWeight: 400,
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                      transition: `color 220ms ${EASE_GENTLE}, transform 220ms ${EASE_GENTLE}`,
                      transform: selected.name === name ? "translateX(2px)" : "translateX(0)",
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 22 }}>
              <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#61656c", lineHeight: 1.6, margin: "0 0 4px 0" }}>{currentPage}</p>
              <div style={{ borderTop: "1px solid #e0ddd7", paddingTop: 14, display: "flex", gap: 0 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0, opacity: highlightFontCredit ? 0.5 : 1, transition: `opacity 180ms ${EASE_GENTLE}` }}>Written using</p>
                  <a
                    href="https://abcdinamo.com/typefaces/daily"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setHighlightFontCredit(true)}
                    onMouseLeave={() => setHighlightFontCredit(false)}
                    onFocus={() => setHighlightFontCredit(true)}
                    onBlur={() => setHighlightFontCredit(false)}
                    style={{ display: "block", fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0, textDecoration: "none", padding: 0 }}
                  >
                    ABC Daily Slab
                  </a>
                  <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0, opacity: highlightFontCredit ? 0.5 : 1, transition: `opacity 180ms ${EASE_GENTLE}` }}>by ABC Dinamo</p>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <button type="button" onClick={() => setColophonOpen(true)} style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0, background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left", display: "block" }}>Colophon</button>
                  <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0 }}>Design</p>
                  <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: "#717377", lineHeight: 1.6, margin: 0 }}>Buy newspaper</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT card: history / colophon */}
        <div
          style={{
            width: RIGHT_W,
            height: CARD_H,
            background: "rgba(238,234,229,0.95)",
            boxShadow: RIGHT_CARD_SHADOW,
            marginLeft: -1,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <div
            key={colophonOpen ? "colophon" : fadeKey + "-text"}
            style={{
              padding: "22px 22px",
              fontFamily: FONT_SLAB,
              fontSize: 12.5,
              color: TEXT_COLOR,
              lineHeight: "20.5px",
              letterSpacing: "0.015em",
              whiteSpace: "pre-line",
              animation: `textFade 0.3s ${EASE_GENTLE}`,
              overflowY: "auto",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            {colophonOpen ? (
              <>
                <button type="button" onClick={() => setColophonOpen(false)} style={{ display: "block", fontFamily: FONT_MONO, fontSize: 11, color: "#717377", background: "none", border: "none", padding: 0, marginBottom: 16, cursor: "pointer" }}>Close</button>
                <span style={{ display: "block" }}>{COLOPHON_TEXT}</span>
              </>
            ) : (
              selected.history
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes charFade {
          from { opacity: 0.7; }
          to { opacity: 1; }
        }
        @keyframes bigCharFade {
          from { opacity: 0.62; transform: scale(0.985); filter: blur(1.5px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes textFade {
          from { opacity: 0.85; }
          to { opacity: 1; }
        }
        @keyframes titleSoft {
          from { opacity: 0.86; }
          to { opacity: 1; }
        }
        @keyframes flowSettle {
          from { opacity: 0.92; transform: translateY(1px); }
          to { opacity: 1; transform: translateY(0); }
        }
        button:hover {
          color: #3f434a !important;
        }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: rgba(113,115,119,0.25); border-radius: 2px; }
      `}</style>
    </div>
  );
}
