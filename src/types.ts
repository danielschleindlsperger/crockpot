import { tagNamesWithGenericProps } from './tag-names'
import { BoxProps } from './box'

type GenericElementType = typeof tagNamesWithGenericProps[number]

type ExtractElementType<U> = U extends React.HTMLAttributes<infer T> ? T : never

type CreateStyled<
  Attrs extends React.HTMLAttributes<HTMLElement>
> = React.PropsWithRef<
  React.FC<
    Attrs & {
      ref?: React.MutableRefObject<ExtractElementType<Attrs> | null>
    } & BoxProps
  >
>

export type Styled = {
  a: CreateStyled<React.AnchorHTMLAttributes<HTMLAnchorElement>>
  applet: CreateStyled<React.HTMLAttributes<HTMLAppletElement>>
  area: CreateStyled<React.AreaHTMLAttributes<HTMLAreaElement>>
  audio: CreateStyled<React.AudioHTMLAttributes<HTMLAudioElement>>
  base: CreateStyled<React.BaseHTMLAttributes<HTMLBaseElement>>
  basefont: CreateStyled<React.HTMLAttributes<HTMLBaseFontElement>>
  blockquote: CreateStyled<React.BlockquoteHTMLAttributes<HTMLQuoteElement>>
  body: CreateStyled<React.HTMLAttributes<HTMLBodyElement>>
  br: CreateStyled<React.HTMLAttributes<HTMLBRElement>>
  button: CreateStyled<React.ButtonHTMLAttributes<HTMLButtonElement>>
  canvas: CreateStyled<React.CanvasHTMLAttributes<HTMLCanvasElement>>
  caption: CreateStyled<React.HTMLAttributes<HTMLTableCaptionElement>>
  col: CreateStyled<React.ColHTMLAttributes<HTMLTableColElement>>
  colgroup: CreateStyled<React.ColgroupHTMLAttributes<HTMLTableColElement>>
  data: CreateStyled<React.DataHTMLAttributes<HTMLDataElement>>
  datalist: CreateStyled<React.HTMLAttributes<HTMLDataListElement>>
  del: CreateStyled<React.DelHTMLAttributes<HTMLModElement>>
  details: CreateStyled<React.DetailsHTMLAttributes<HTMLDetailsElement>>
  dialog: CreateStyled<React.DialogHTMLAttributes<HTMLDialogElement>>
  dir: CreateStyled<React.HTMLAttributes<HTMLDirectoryElement>>
  div: CreateStyled<React.HTMLAttributes<HTMLDivElement>>
  dl: CreateStyled<React.HTMLAttributes<HTMLDListElement>>
  embed: CreateStyled<React.EmbedHTMLAttributes<HTMLEmbedElement>>
  fieldset: CreateStyled<React.FieldsetHTMLAttributes<HTMLFieldSetElement>>
  figcaption: CreateStyled<React.HTMLAttributes<HTMLElement>>
  font: CreateStyled<React.HTMLAttributes<HTMLFontElement>>
  form: CreateStyled<React.FormHTMLAttributes<HTMLFormElement>>
  frame: CreateStyled<React.HTMLAttributes<HTMLFrameElement>>
  frameset: CreateStyled<React.HTMLAttributes<HTMLFrameSetElement>>
  h1: CreateStyled<React.HTMLAttributes<HTMLHeadingElement>>
  h2: CreateStyled<React.HTMLAttributes<HTMLHeadingElement>>
  h3: CreateStyled<React.HTMLAttributes<HTMLHeadingElement>>
  h4: CreateStyled<React.HTMLAttributes<HTMLHeadingElement>>
  h5: CreateStyled<React.HTMLAttributes<HTMLHeadingElement>>
  h6: CreateStyled<React.HTMLAttributes<HTMLHeadingElement>>
  head: CreateStyled<React.HTMLAttributes<HTMLHeadElement>>
  hr: CreateStyled<React.HTMLAttributes<HTMLHRElement>>
  html: CreateStyled<React.HTMLAttributes<HTMLHtmlElement>>
  iframe: CreateStyled<React.IframeHTMLAttributes<HTMLIFrameElement>>
  img: CreateStyled<React.ImgHTMLAttributes<HTMLImageElement>>
  input: CreateStyled<React.InputHTMLAttributes<HTMLInputElement>>
  ins: CreateStyled<React.InsHTMLAttributes<HTMLModElement>>
  label: CreateStyled<React.LabelHTMLAttributes<HTMLLabelElement>>
  legend: CreateStyled<React.HTMLAttributes<HTMLLegendElement>>
  li: CreateStyled<React.LiHTMLAttributes<HTMLLIElement>>
  link: CreateStyled<React.LinkHTMLAttributes<HTMLLinkElement>>
  map: CreateStyled<React.MapHTMLAttributes<HTMLMapElement>>
  marquee: CreateStyled<React.HTMLAttributes<HTMLMarqueeElement>>
  menu: CreateStyled<React.MenuHTMLAttributes<HTMLMenuElement>>
  meta: CreateStyled<React.MetaHTMLAttributes<HTMLMetaElement>>
  meter: CreateStyled<React.MeterHTMLAttributes<HTMLMeterElement>>
  object: CreateStyled<React.ObjectHTMLAttributes<HTMLObjectElement>>
  ol: CreateStyled<React.OlHTMLAttributes<HTMLOListElement>>
  optgroup: CreateStyled<React.OptgroupHTMLAttributes<HTMLOptGroupElement>>
  option: CreateStyled<React.OptionHTMLAttributes<HTMLOptionElement>>
  output: CreateStyled<React.OutputHTMLAttributes<HTMLOutputElement>>
  p: CreateStyled<React.HTMLAttributes<HTMLParagraphElement>>
  param: CreateStyled<React.ParamHTMLAttributes<HTMLParamElement>>
  picture: CreateStyled<React.HTMLAttributes<HTMLPictureElement>>
  pre: CreateStyled<React.HTMLAttributes<HTMLPreElement>>
  progress: CreateStyled<React.ProgressHTMLAttributes<HTMLProgressElement>>
  q: CreateStyled<React.HTMLAttributes<HTMLQuoteElement>>
  script: CreateStyled<React.ScriptHTMLAttributes<HTMLScriptElement>>
  select: CreateStyled<React.SelectHTMLAttributes<HTMLSelectElement>>
  slot: CreateStyled<React.HTMLAttributes<HTMLSlotElement>>
  source: CreateStyled<React.SourceHTMLAttributes<HTMLSourceElement>>
  span: CreateStyled<React.HTMLAttributes<HTMLSpanElement>>
  style: CreateStyled<React.StyleHTMLAttributes<HTMLStyleElement>>
  table: CreateStyled<React.TableHTMLAttributes<HTMLTableElement>>
  tbody: CreateStyled<React.HTMLAttributes<HTMLTableSectionElement>>
  td: CreateStyled<React.TdHTMLAttributes<HTMLTableDataCellElement>>
  template: CreateStyled<React.HTMLAttributes<HTMLTemplateElement>>
  textarea: CreateStyled<React.TextareaHTMLAttributes<HTMLTextAreaElement>>
  tfoot: CreateStyled<React.HTMLAttributes<HTMLTableSectionElement>>
  th: CreateStyled<React.ThHTMLAttributes<HTMLTableHeaderCellElement>>
  thead: CreateStyled<React.HTMLAttributes<HTMLTableSectionElement>>
  time: CreateStyled<React.TimeHTMLAttributes<HTMLTimeElement>>
  title: CreateStyled<React.HTMLAttributes<HTMLTitleElement>>
  tr: CreateStyled<React.HTMLAttributes<HTMLTableRowElement>>
  track: CreateStyled<React.TrackHTMLAttributes<HTMLTrackElement>>
  ul: CreateStyled<React.HTMLAttributes<HTMLUListElement>>
  video: CreateStyled<React.VideoHTMLAttributes<HTMLVideoElement>>
} & Record<GenericElementType, CreateStyled<React.HTMLAttributes<HTMLElement>>>
