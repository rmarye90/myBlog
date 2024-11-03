export const useFormatDate = (date: string) => {
  const dateObject = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }
  const formatedDate = dateObject.toLocaleDateString('fr-FR', options)

  return { formatedDate }
}
