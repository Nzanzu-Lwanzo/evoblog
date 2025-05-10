export function formatAwesomeDate(date: string | Date): string {

    const _date = typeof date === "string" ? new Date(date) : date

    return new Intl.DateTimeFormat('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
    })
        .format(_date)
        .replace(' à ', ' à ')
        .replace(/(\d{1,2}) h (\d{2})/, '$1h$2');
}
