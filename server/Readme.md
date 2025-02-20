## /api/user/register

**Method:** `POST`  
**Description:** Registers a new user account.

#### Body

- **email** (string, required, must be valid)
- **password** (string, required, min length 6)
- **fullname** (object, required)
  - **firstname** (string, required, min length 3)
  - **lastname** (string, optional, min length 3)

#### Response Codes

- **201**: Registration successful
- **400**: Validation errors

#### Sample Request

```
POST /api/user/register
{
  "email": "john.doe@example.com",
  "password": "abcdef",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

#### Sample Success Response

```
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "role": "user",
    "teams": [],
    "_id": "<insert_user_id_here>"
  },
  "token": "<insert_generated_token_here>"
}

```

## /api/user/login

**Method:** `POST`  
**Description:** Logs in an existing user.

#### Body

- **email** (string, required, must be valid)
- **password** (string, required, min length 6)

#### Response Codes

- **200**: Login successful
- **400**: Validation errors
- **401**: Invalid Email or Password

#### Sample Request

```
POST /api/user/login
{
  "email": "john.doe@example.com",
  "password": "abcdef"
}
```

#### Sample Success Response

```
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "role": "user",
    "teams": [],
    "_id": "<insert_user_id_here>"
  },
  "token": "<insert_generated_token_here>"
}
```
