import { context } from "@/data/context"
import { people } from "@/data/people"
import { drafts } from "@/data/drafts"
import { implementations } from "@/data/implementations"

export const data = {
  '@context': context,
  '@graph': [
    ...people,
    ...drafts,
    ...implementations
  ]
}
