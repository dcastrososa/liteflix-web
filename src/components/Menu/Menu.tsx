'use client'

import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { AnimatePresence } from 'framer-motion'
import { SvgIconProps } from '@mui/material'

import {
  MenuButton,
  MenuContainer,
  MenuContent,
  MenuItem,
  AddMovieButton,
  LogoutButton,
  CloseButton,
} from './styles'
import { CustomMenuIcon } from '../Header/MenuIcon'
import { menuAnimation } from './styles'

const MENU_ITEMS = [
  { id: 'inicio', label: 'INICIO' },
  { id: 'series', label: 'SERIES' },
  { id: 'peliculas', label: 'PELÍCULAS' },
  { id: 'agregadas', label: 'AGREGADAS RECIENTEMENTE' },
  { id: 'populares', label: 'POPULARES' },
  { id: 'mis_peliculas', label: 'MIS PELÍCULAS' },
  { id: 'mi_lista', label: 'MI LISTA' },
]

interface MenuProps {
  onAddMovie: () => void
  MenuIcon?: React.ComponentType<SvgIconProps>
}

export function Menu({ onAddMovie, MenuIcon = CustomMenuIcon }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleAddMovie = () => {
    setIsOpen(false)
    onAddMovie()
  }

  return (
    <>
      <MenuButton onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </MenuButton>

      <AnimatePresence>
        {isOpen && (
          <MenuContainer {...menuAnimation}>
            <CloseButton onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </CloseButton>
            <MenuContent>
              {MENU_ITEMS.map((item) => (
                <MenuItem key={item.id}>
                  {item.label}
                </MenuItem>
              ))}
              <AddMovieButton onClick={handleAddMovie}>
                AGREGAR PELÍCULA
              </AddMovieButton>
              <LogoutButton>
                CERRAR SESIÓN
              </LogoutButton>
            </MenuContent>
          </MenuContainer>
        )}
      </AnimatePresence>
    </>
  )
} 