import { type JSX } from 'react'
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router'
import { Blockquote, Button, List, Placeholder } from 'tmaui'
import { BackButton } from '@/components/ui/tma/BackButton'

export function RouteError(): JSX.Element {
  const navigate = useNavigate()
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : JSON.stringify(error)
  const stack = error instanceof Error ? error.stack : null

  return (
    <BackButton>
      <Placeholder
        header='Unexpected Application Error!'
        description={message}
        action={
          <Button
            size='m'
            onClick={() => navigate(-1)}
          >
            Return back
          </Button>
        }
        className='px-3!'
      />
      {stack && (
        <List>
          <Blockquote>
            <pre className='break-all whitespace-pre-wrap'>{stack}</pre>
          </Blockquote>
        </List>
      )}
    </BackButton>
  )
}
