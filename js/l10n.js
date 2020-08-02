import { cookie } from './utils.js'

const langs = {}

langs.en = {
  html: {
    utilities: 'Utilities',
    clubs: 'Clubs',
    schedule: 'Schedule',
    staff: 'Staff',
    options: 'Options',
    barcode: 'Barcode',
    'barcode-desc':
      'Click on the eye icon to display; turn up your screen brightness to the max when scanning just in case. Edits are saved automatically. For the curious, student ID cards use Code 39, which you can read about on {wikipedia|Wikipedia}.',
    'add-barcode': 'Add barcode',
    minscore: 'Minimum finals score calculator',
    'current-grade': 'Current grade: {input}',
    'finals-worth': 'Portion of grade the final determines: {input}',
    'min-grade': 'Minimum acceptable grade: {input}',
    map: 'Map',
    'image-instruct':
      '{for|For the image}: You can use a finger to pan, or two to rotate, zoom, and pan. You can use your mouse to drag, or scroll to zoom or right-click to rotate.',
    'gmaps-instruct':
      "{for|For Google Maps}: Only works when you're connected to the internet. If you're on touchscreen and can't scroll back up, try scrolling on the buttons.",
    'club-list': 'Club list',
    'clubs-disclaimer':
      "Please note that club information was taken from the administration's {link|chartered club list as of July 4th, 2020}, so attribute inaccuracies to them.",
    'lists-disabled': "You've disabled the club and staff lists",
    'turn-back-on': 'Turn back on',
    'select-date': 'select date',
    'staff-list': 'Staff list',
    version: 'You are using the {version} version.',
    theme: 'Theme',
    'light-theme': 'Light theme',
    'dark-theme': 'Dark theme',
    'neither-theme': 'Neither theme',
    'time-formatting': 'Time formatting',
    '12h': '12-hour',
    '24h': '24-hour',
    'title-compact': 'Tab title compactness',
    units: 'Units included',
    numbers: 'Numbers only',
    'disable-lists': 'Disable club/staff lists',
    periods: 'Periods',
    'periods-desc': 'Click on the coloured square to change period colour.',
    'control-centre': 'Control Centre',
    'control-centre-desc': "If UGWA isn't updating, try these buttons.",
    reload: 'Restart UGWA',
    'trick-cache': 'trick the cache',
    'staff-name': 'Staff name',
    close: 'Close',
    'club-name': 'Club name',
    ok: 'OK',
    'add-ugwa': 'To add UGWA to your home screen',
    'desktop-instruct':
      '{name|Desktop}—bookmark this page or pin this tab (right click on the tab and select "Pin tab")',
    'chromebook-instruct':
      '{name|Chromebook}—pin this page to the shelf (menu > more tools > add to shelf)',
    'ios-instruct':
      '{name|iOS}—tap on the share icon and select "add to home screen"',
    'android-instruct':
      '{name|Android}—tap on the menu and select "add to home screen"',
    bugs: 'Bug reports',
    'report-bugs':
      'You can {gh|make a new issue on GitHub} or email {email|sy24484@pausd.us} to make a feature request or bug report.',
    browsers:
      'UGWA only aims to support the latest versions of Chrome and iOS Safari (not MacOS Safari); other versions are low-priority.',
    about: 'About',
    intent:
      'The app was originally made to make the features of TheGunnApp available to Chromebook users.',
    source: 'UGWA is open sourced on {github|Github}.',
    'other-versions':
      'Other versions: {gunn-schedule|Gunn Schedule} (no alternate schedules) · {ugwita|Ugwita} (ugly) · {ugwa2|Ugwa 2} (not done) · {ugwisha|Ugwisha}.',
    lonely:
      'UGWA is lonely and needs friends! You should make your own schedule app.',
    'other-apps':
      'Gunn apps made by other people: {tga-ios|TheGunnApp} by the iOS App Development club · {tga-android|TheGunnApp} by David C. · {nugwa|Not UGWA} by Tomer S.',
    credits: 'Credits',
    'sean-creds': '{name|Sean} made most of the app.',
    'henry-creds': '{name|Henry} made the Google Maps overlay.',
    'service-creds':
      '{search|Google Search}, {so|Stack Overflow}, and {mdn|MDN} helped.',
    'feature-based': 'Many features based on the original Gunn App.',
    material:
      "Design based on {link|Material Design}'s icons, colours, and specifications.",
    languages: 'Languages',
    'this-is-joke': '(This is a joke.)',
    'no-hour': 'No hours',
    comm: 'Interstudent communication',
    'prev-chats': 'Previous chats',
    'open-chat': 'Join chat',
    send: 'Send',
    'msg-note':
      'Only consonants, numbers, spaces, and a few punctuation marks are allowed. 5 messages per 10 seconds.',
    'want-ugwa-normal': 'To install UGWA like a normal app:',
    'safari-only': '(this can only be done in the Safari app)',
    'b4-share-icon': 'Tap the share button ',
    'b4-add-home': ', select "',
    'add-home':
      'Tap the share button {share-icon}, select "{add-home|Add to Home Screen}" in the bottom row,{add-home-img}then tap "{add|Add}."',
    'use-safari':
      "Open UGWA in Safari first; this can't be done anywhere else.",
    naw: 'Thanks but no thanks',
    heaucques: 'OK.',
    assignments: 'Assignments',
    'asgn-display': 'Upcoming assignments position',
    'asgn-before': 'Before the schedule',
    'asgn-after': 'After the schedule',
    'asgn-none': 'New Zealand',
    'asgn-sort': 'Sorting method',
    'asgn-chrono-primero': 'By due date',
    'asgn-important-importance': 'By priority',
    'asgn-algorithms': 'By use of A L G O R I T H M S',
    'edit-asgn': 'Assignment properties',
    'asgn-buttons': '{delete|Delete}{cancel|Cancel}{save|Save}',
    'asgn-period-date': 'Due by {period} on {date}.',
    category: 'Category: {category}',
    importance: 'Priority: {low|low} {medium|medium} {high|high}',
    transfer: 'Cross-device settings transfer',
    'export-copy': 'copy export code',
    'export-file': 'download export code',
    'import-file': 'Or upload a file: {file} {import|Import}',
    assync: 'Assignment Synchronization System (Assync)',
    'assync-desc':
      'Assync allows you to sync your assignments across devices. This is an experimental feature.',
    'not-using-assync':
      '{create|Create Assync account} or {id} {join|Sync to account}',
    'using-assync': 'Your Assync account ID: {id} {leave|Stop synching}',
    'loading-assync': 'Loading...',
    errors: 'Runtime error log',
    'edit-h': 'Set H period times',
    'h-editor': 'H period settings',
    'toggle-pd-add-asgn': 'Show "Add assignment" button on period cards?',
    support: 'Student resources',
    sponsor: 'Sponsored by the ROCK team.',
    'show-self-toggle': 'Show SELF?',
    show0: 'Show zero period?',
    s1a: 'Crisis Text Line',
    s1b: '741-741',
    s1c:
      'For everyone in crisis; text "Help"\nText "LGBTQ" for LGBTQQ-specific support',
    s2a: 'Suicide Prevention Hotline',
    s2b: '800-273-8256',
    s2c: 'Prevention and crisis resources (national)',
    s3a: 'Suicide & Crisis Line',
    s3b: '855-278-4204',
    s3c: 'For individuals in crisis (Santa Clara County)',
    s4a: 'Star Vista',
    s4b: '650-579-0350',
    s4c: 'Crisis intervention (San Mateo County)',
    s5a: 'Uplift',
    s5b: '408-379-9085',
    s5c: 'Mobile crisis intervention and safety planning',
    s6a: 'Trevor Lifeline',
    s6b: '866-488-7386',
    s6c: 'LGBTQ crisis intervention and suicide prevention',
    'staff-disclaimer':
      "Please note that staff information was taken from the administration's {link|staff directory as of July 4th, 2020}, so attribute inaccuracies to them.",
    announcements: 'Announcements',
    loading: 'Loading...',
    new: 'NEW',
    'hide-preps': 'Hide periods with "prep" in their names from the schedule?',
    'martin-ad': "{ad|Compelling utility} Martin's GPA Calculation Website",
    'coronavirus-heading': "School's closed!",
    'coronavirus-subtitle':
      "Don't trust what UGWA says for the rest of the school year.",
    'coronavirus-pausd': 'PAUSD updates about the coronavirus',
    'kevin-creds': '{name|Kevin} for the French translation.'
  },
  other: {
    'anti-ugwaga': 'Click/tap to continue to the Unofficial Gunn Web App',
    'no-study-before-emph': 'You ',
    'no-study-emph': "don't need to study",
    'no-study-after-emph':
      "; even if you score 0%, you'll be above your threshold.",
    'zero-error': "Please don't enter so many zeroes.",
    'minscore-before-emph': "You'll need to score at least ",
    'minscore-after-emph': ' to keep your parents happy.',
    'minscore-too-high-addendum':
      " If there's no extra credit, you're screwed.",
    gmaps: 'use google maps',
    image: 'use the image',
    'gmaps-error':
      "Google Maps not loading! Maybe you aren't connected to the internet?",
    you: 'You',
    'barcode-legacy-default': 'Student #{N}',
    'barcode-default': 'Intellectual student',
    'barcode-student-placeholder': 'Whose ID is this?',
    ds: 'S  M  T  W  &Theta;  F  S',
    mos: 'Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct  Nov  Dec',
    'no-school': 'No school today!',
    flex: 'Tutorial',
    brunch: 'Break/Brunch',
    lunch: 'Lunch',
    self: 'SELF',
    periodx: 'Period {X}',
    months:
      'January  February  March  April  May  June  July  August  September  October  November  December',
    loading: 'Loading',
    'no-events': 'No events today :(',
    'events-error':
      "; couldn't get events; maybe you aren't connected to the internet?",
    days: 'Sunday  Monday  Tuesday  Wednesday  Thursday  Friday  Saturday',
    'default-alt-msg': 'good luck with our schedule lol',
    'period-name-label': 'Set label for ',
    'enable-lists': 'Enable club/staff lists',
    'supreme-leader': 'Supreme Leader',
    universe: 'Universe',
    'blamed-teacher': 'Blamed Teacher',
    'staff-error':
      "; couldn't get staff data; maybe you aren't connected to the internet?",
    title: 'Title:',
    department: 'Department:',
    email: 'Email:',
    phone: 'Phone:',
    website: 'Website:',
    basement: 'Basement:',
    'oc-basement': "OC's Basement",
    'sophomore-club': 'No Senior Club',
    'soph-desc':
      'A club to develop our empathy, resilience and other core social-emotional skills; to help us build trusting relationships with our peers and mentors; and to establish spaces where we feel safe and supported. We believe that we will benefit from challenging our assumptions about the world and each other by asking questions, having meaningful discussions, and remaining open-minded while maintaining our core values. In so doing, we will develop our own identity, without the pressure of formal grading or assessment, and with every effort to play, explore, and appreciate diversity. Our goal is to help ourselves realize that each of us is immeasurably valuable not because of what we have achieved but because of who we are and who we can become. We have one of the best attendance rates; no seniors allowed!',
    'soph-day': 'Thursday',
    'soph-time': 'Flex',
    'soph-room': 'Any room',
    'soph-prez': 'Tara Firenzi',
    'soph-teacher': 'Courtney Carlomagno',
    'soph-email': 'ccarlomagno@pausd.org',
    'club-error':
      "; couldn't get club data; maybe you aren't connected to the internet?",
    day: 'Meeting day:',
    time: 'Meeting time:',
    location: 'Location:',
    desc: 'Description:',
    presidents: 'President(s):',
    advisors: 'Teacher Advisor(s):',
    'teacher-email': 'Teacher Email:',
    donation: 'Suggested donation:',
    'before-alt-msg': 'This is an alternate schedule. The school says, "',
    'after-alt-msg': '"',
    appname: 'Unofficial Gunn Web App (UGWA)',
    'add-to-list': 'Add to my clubs',
    'remove-from-list': 'Remove from my clubs',
    'lunch-clubs': 'Clubs',
    summer: 'Enjoy your summer!',
    'image-url': 'Image URL',
    cannot: 'There was a problem fetching the image.',
    'add-asgn': 'Add assignment',
    asgn: 'Upcoming assignments',
    overdue: 'overdue',
    doneify: 'Mark as done',
    undoneify: 'Unmark as done',
    'asgn-cat-homework': 'homework',
    'asgn-cat-preparation': 'preparation',
    'asgn-cat-worksheet': 'worksheet',
    'asgn-cat-reading': 'reading',
    'asgn-cat-quiz': 'quiz',
    'asgn-cat-test': 'test',
    'asgn-cat-exam': 'exam',
    'asgn-cat-presentation': 'presentation',
    'asgn-cat-materials': 'materials',
    'asgn-cat-lab': 'lab',
    'asgn-cat-other': 'other',
    'import-warning':
      'This will permanently override your existing settings. Do you want that?',
    'import-problem': 'There was a problem.',
    'export-file-name':
      'the-settings-of-a-great-intellectual-gunn-student.json',
    'assync-loading': 'Loading assignments...',
    'assync-loaded': 'Assignments loaded.',
    'assync-loading-problem':
      'Assync is no more. All saved assignments have been lost. Please turn off Assync in Options.', // TEMP
    'assync-saving': 'Saving changes...',
    'assync-saved': 'Changes saved.',
    'assync-saving-problem': 'There was a problem saving the changes.',
    p0: 'Zero period',
    'dead-club': 'This club no longer exists at Gunn.',
    'psa-date': 'Created on {D}.',
    'psa-error': 'Could not load PSA: ',
    events: 'Events',
    'previewing-future': 'This is the schedule for the next school day.',
    'return-today': "Show today's schedule",
    'close-future': 'OK'
  },
  placeholders: {
    clubs: 'Search clubs',
    staff: 'Search staff',
    'send-msg': 'Send a message',
    assignment: 'Assignment',
    import: 'Paste exported settings here',
    assync: 'Assync ID',
    errors: 'JavaScript runtime errors will be logged here'
  },
  times: {
    duration ({ T: minutes }) {
      if (minutes < 1) return 'less than a minute'
      return (
        (minutes >= 120
          ? Math.floor(minutes / 60) + ' hours'
          : minutes >= 60
          ? 'an hour'
          : '') +
        (minutes % 60 === 0
          ? ''
          : (minutes >= 60 ? ' and ' : '') +
            (minutes % 60 === 1 ? 'a minute' : (minutes % 60) + ' minutes'))
      )
    },
    date: '{M} {D}',
    ended: '{P} ended {T} ago.',
    ending: '{P} ending in {T}.',
    'ending-short': '{T} left',
    starting: '{P} starting in {T}.',
    'starting-short': '{T} until {P}',
    long: '{T} long',
    'self-ended': 'Ended {T} ago.',
    'self-starting': 'Starting in {T}.',
    'self-ending': 'Ending in {T1}; started {T2} ago.',
    'due-date' ({ P: periodSpan, D: dateStr }) {
      return 'due by ' + (periodSpan ? periodSpan + ' on ' : '') + dateStr
    },
    'end-time': 'School ends at {T} today.'
  }
}

export const availableLangs = {
  en: 'English',
  'en-gt': 'English (Google Translated through Chinese)',
  es: 'español',
  fr: 'Français',
  test: 'le language test',
  'x-mleng': "L'leng"
}
export const publicLangs = /(?:\?|&)all-langs/.exec(window.location.search)
  ? Object.keys(availableLangs)
  : ['en', 'en-gt', 'fr']
if (!availableLangs[cookie.getItem('[gunn-web-app] language')]) {
  let lang = 'en'
  if (navigator.languages) {
    lang = navigator.languages.find(lang => availableLangs[lang]) || lang
  } else {
    const userLang = navigator.language || navigator.userLanguage
    if (availableLangs[userLang]) lang = userLang
  }
  cookie.setItem('[gunn-web-app] language', lang)
}
export const currentLang = cookie.getItem('[gunn-web-app] language')
export function localize (id, src = 'other') {
  if (!langs[currentLang]) {
    console.warn(`Language ${currentLang} not loaded.`)
    langs[currentLang] = {}
  }
  if (!langs[currentLang][src]) {
    langs[currentLang][src] = {}
  }
  if (langs[currentLang][src][id] !== undefined)
    return langs[currentLang][src][id]
  if (!langs.en[src]) {
    console.warn(`Source ${src} does not exist.`)
    return id
  }
  if (langs.en[src][id] === undefined) {
    console.warn(`Nothing set for ${src}/${id}`)
    return id
  }
  return langs.en[src][id]
}
function loadLanguage (langCode) {
  return import(`./languages/${langCode}.js`).then(({ default: langData }) => {
    langs[langCode] = langData
  })
}
export const ready =
  currentLang !== 'en' ? loadLanguage(currentLang) : Promise.resolve()
