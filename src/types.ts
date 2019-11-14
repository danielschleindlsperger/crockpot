import { tagNamesWithGenericProps } from './tag-names'
import { BoxProps } from './box'

type GenericElementType = typeof tagNamesWithGenericProps[number]

type ExtractElementType<U> = U extends React.HTMLAttributes<infer T> ? T : never

type CreateCrockpotElement<
  Attrs extends React.HTMLAttributes<HTMLElement>
> = React.PropsWithRef<
  React.FC<
    Attrs & {
      ref?: React.MutableRefObject<ExtractElementType<Attrs> | null>
    } & BoxProps
  >
>

export type CrockpotElementMap = {
  a: CreateCrockpotElement<React.AnchorHTMLAttributes<HTMLAnchorElement>>
  applet: CreateCrockpotElement<React.HTMLAttributes<HTMLAppletElement>>
  area: CreateCrockpotElement<React.AreaHTMLAttributes<HTMLAreaElement>>
  audio: CreateCrockpotElement<React.AudioHTMLAttributes<HTMLAudioElement>>
  base: CreateCrockpotElement<React.BaseHTMLAttributes<HTMLBaseElement>>
  basefont: CreateCrockpotElement<React.HTMLAttributes<HTMLBaseFontElement>>
  blockquote: CreateCrockpotElement<
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>
  >
  body: CreateCrockpotElement<React.HTMLAttributes<HTMLBodyElement>>
  br: CreateCrockpotElement<React.HTMLAttributes<HTMLBRElement>>
  button: CreateCrockpotElement<React.ButtonHTMLAttributes<HTMLButtonElement>>
  canvas: CreateCrockpotElement<React.CanvasHTMLAttributes<HTMLCanvasElement>>
  caption: CreateCrockpotElement<React.HTMLAttributes<HTMLTableCaptionElement>>
  col: CreateCrockpotElement<React.ColHTMLAttributes<HTMLTableColElement>>
  colgroup: CreateCrockpotElement<
    React.ColgroupHTMLAttributes<HTMLTableColElement>
  >
  data: CreateCrockpotElement<React.DataHTMLAttributes<HTMLDataElement>>
  datalist: CreateCrockpotElement<React.HTMLAttributes<HTMLDataListElement>>
  del: CreateCrockpotElement<React.DelHTMLAttributes<HTMLModElement>>
  details: CreateCrockpotElement<
    React.DetailsHTMLAttributes<HTMLDetailsElement>
  >
  dialog: CreateCrockpotElement<React.DialogHTMLAttributes<HTMLDialogElement>>
  dir: CreateCrockpotElement<React.HTMLAttributes<HTMLDirectoryElement>>
  div: CreateCrockpotElement<React.HTMLAttributes<HTMLDivElement>>
  dl: CreateCrockpotElement<React.HTMLAttributes<HTMLDListElement>>
  embed: CreateCrockpotElement<React.EmbedHTMLAttributes<HTMLEmbedElement>>
  fieldset: CreateCrockpotElement<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>
  >
  figcaption: CreateCrockpotElement<React.HTMLAttributes<HTMLElement>>
  font: CreateCrockpotElement<React.HTMLAttributes<HTMLFontElement>>
  form: CreateCrockpotElement<React.FormHTMLAttributes<HTMLFormElement>>
  frame: CreateCrockpotElement<React.HTMLAttributes<HTMLFrameElement>>
  frameset: CreateCrockpotElement<React.HTMLAttributes<HTMLFrameSetElement>>
  h1: CreateCrockpotElement<React.HTMLAttributes<HTMLHeadingElement>>
  h2: CreateCrockpotElement<React.HTMLAttributes<HTMLHeadingElement>>
  h3: CreateCrockpotElement<React.HTMLAttributes<HTMLHeadingElement>>
  h4: CreateCrockpotElement<React.HTMLAttributes<HTMLHeadingElement>>
  h5: CreateCrockpotElement<React.HTMLAttributes<HTMLHeadingElement>>
  h6: CreateCrockpotElement<React.HTMLAttributes<HTMLHeadingElement>>
  head: CreateCrockpotElement<React.HTMLAttributes<HTMLHeadElement>>
  hr: CreateCrockpotElement<React.HTMLAttributes<HTMLHRElement>>
  html: CreateCrockpotElement<React.HTMLAttributes<HTMLHtmlElement>>
  iframe: CreateCrockpotElement<React.IframeHTMLAttributes<HTMLIFrameElement>>
  img: CreateCrockpotElement<React.ImgHTMLAttributes<HTMLImageElement>>
  input: CreateCrockpotElement<React.InputHTMLAttributes<HTMLInputElement>>
  ins: CreateCrockpotElement<React.InsHTMLAttributes<HTMLModElement>>
  label: CreateCrockpotElement<React.LabelHTMLAttributes<HTMLLabelElement>>
  legend: CreateCrockpotElement<React.HTMLAttributes<HTMLLegendElement>>
  li: CreateCrockpotElement<React.LiHTMLAttributes<HTMLLIElement>>
  link: CreateCrockpotElement<React.LinkHTMLAttributes<HTMLLinkElement>>
  map: CreateCrockpotElement<React.MapHTMLAttributes<HTMLMapElement>>
  marquee: CreateCrockpotElement<React.HTMLAttributes<HTMLMarqueeElement>>
  menu: CreateCrockpotElement<React.MenuHTMLAttributes<HTMLMenuElement>>
  meta: CreateCrockpotElement<React.MetaHTMLAttributes<HTMLMetaElement>>
  meter: CreateCrockpotElement<React.MeterHTMLAttributes<HTMLMeterElement>>
  object: CreateCrockpotElement<React.ObjectHTMLAttributes<HTMLObjectElement>>
  ol: CreateCrockpotElement<React.OlHTMLAttributes<HTMLOListElement>>
  optgroup: CreateCrockpotElement<
    React.OptgroupHTMLAttributes<HTMLOptGroupElement>
  >
  option: CreateCrockpotElement<React.OptionHTMLAttributes<HTMLOptionElement>>
  output: CreateCrockpotElement<React.OutputHTMLAttributes<HTMLOutputElement>>
  p: CreateCrockpotElement<React.HTMLAttributes<HTMLParagraphElement>>
  param: CreateCrockpotElement<React.ParamHTMLAttributes<HTMLParamElement>>
  picture: CreateCrockpotElement<React.HTMLAttributes<HTMLPictureElement>>
  pre: CreateCrockpotElement<React.HTMLAttributes<HTMLPreElement>>
  progress: CreateCrockpotElement<
    React.ProgressHTMLAttributes<HTMLProgressElement>
  >
  q: CreateCrockpotElement<React.HTMLAttributes<HTMLQuoteElement>>
  script: CreateCrockpotElement<React.ScriptHTMLAttributes<HTMLScriptElement>>
  select: CreateCrockpotElement<React.SelectHTMLAttributes<HTMLSelectElement>>
  slot: CreateCrockpotElement<React.HTMLAttributes<HTMLSlotElement>>
  source: CreateCrockpotElement<React.SourceHTMLAttributes<HTMLSourceElement>>
  span: CreateCrockpotElement<React.HTMLAttributes<HTMLSpanElement>>
  style: CreateCrockpotElement<React.StyleHTMLAttributes<HTMLStyleElement>>
  table: CreateCrockpotElement<React.TableHTMLAttributes<HTMLTableElement>>
  tbody: CreateCrockpotElement<React.HTMLAttributes<HTMLTableSectionElement>>
  td: CreateCrockpotElement<React.TdHTMLAttributes<HTMLTableDataCellElement>>
  template: CreateCrockpotElement<React.HTMLAttributes<HTMLTemplateElement>>
  textarea: CreateCrockpotElement<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  >
  tfoot: CreateCrockpotElement<React.HTMLAttributes<HTMLTableSectionElement>>
  th: CreateCrockpotElement<React.ThHTMLAttributes<HTMLTableHeaderCellElement>>
  thead: CreateCrockpotElement<React.HTMLAttributes<HTMLTableSectionElement>>
  time: CreateCrockpotElement<React.TimeHTMLAttributes<HTMLTimeElement>>
  title: CreateCrockpotElement<React.HTMLAttributes<HTMLTitleElement>>
  tr: CreateCrockpotElement<React.HTMLAttributes<HTMLTableRowElement>>
  track: CreateCrockpotElement<React.TrackHTMLAttributes<HTMLTrackElement>>
  ul: CreateCrockpotElement<React.HTMLAttributes<HTMLUListElement>>
  video: CreateCrockpotElement<React.VideoHTMLAttributes<HTMLVideoElement>>
} & Record<
  GenericElementType,
  CreateCrockpotElement<React.HTMLAttributes<HTMLElement>>
>
