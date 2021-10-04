export enum validationError {
    USERNAME_TOO_SHORT = "Username too short",
    PASSWORD_MISMATCH = "Passwords does not match",
    NOT_AN_EMAIL = "Not a valid email address",
    INVALID_PASSWORD = "Not a valid password. A valid password must have at least 8 characters long, include minumum 1 lower-case character, 1 upper-case character, 1 number anmd 1 symbol.",
    EMPTY_PASSWD = "A password must not be empty.",
    CONFIRM_PASSWD_NOT_EQ = "Passwords are not the same.",
    INVALID_DISPLAY_NAME = "Display name is too Short. Your display name must have at least 5 characters long.",
  }
  