'use client'

import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { AnimatePresence } from 'framer-motion'

import {
  MenuButton,
  MenuContainer,
  MenuContent,
  MenuItem,
  MenuTitle,
  AddMovieButton,
  LogoutButton,
  CloseButton,
} from './styles'

import { AddMovieModal } from '../AddMovieModal/AddMovieModal'
import { CustomMenuIcon } from '../Header/MenuIcon'

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
  MenuIcon?: React.ComponentType<any>
}

export function Menu({ onAddMovie, MenuIcon = CustomMenuIcon }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleAddMovie = () => {
    setIsOpen(false) // Cerramos el menú
    onAddMovie() // Abrimos el modal
  }

  return (
    <>
      <MenuButton onClick={() => setIsOpen(true)}>
        <MenuIcon sx={{ fontSize: 28 }} />
      </MenuButton>

      <AnimatePresence>
        {isOpen && (
          <MenuContainer
            initial={{ x: -380 }}
            animate={{ x: 0 }}
            exit={{ x: -380 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
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