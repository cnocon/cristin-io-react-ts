import React from 'react'
import { Link } from '@chakra-ui/react'
import { Page } from './Page'
import { BsPencil } from 'react-icons/bs'

export const Coursework = () => {
  return (
    <Page title="Coursework" icon={<BsPencil />}>
      Coursework
      <ul>
        <li>
          <Link
            href="https://teamtreehouse.com/profiles/cristinoconnor.json"
            target="blank"
          >
            Treehouse Stats for CristinOconnor
          </Link>
        </li>
        <li>
          <Link
            href="https://teamtreehouse.com/profiles/cnocon.json"
            target="blank"
          >
            Treehouse Stats for cnocon
          </Link>
        </li>
      </ul>
    </Page>
  )
}
