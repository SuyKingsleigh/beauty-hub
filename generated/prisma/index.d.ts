
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Establishment
 * 
 */
export type Establishment = $Result.DefaultSelection<Prisma.$EstablishmentPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model AppointmentServices
 * 
 */
export type AppointmentServices = $Result.DefaultSelection<Prisma.$AppointmentServicesPayload>
/**
 * Model UserWorkingHour
 * 
 */
export type UserWorkingHour = $Result.DefaultSelection<Prisma.$UserWorkingHourPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  created: 'created',
  confirmed: 'confirmed',
  canceled: 'canceled',
  executed: 'executed',
  missed: 'missed'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Weekday: {
  sunday: 'sunday',
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday'
};

export type Weekday = (typeof Weekday)[keyof typeof Weekday]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Weekday = $Enums.Weekday

export const Weekday: typeof $Enums.Weekday

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.establishment`: Exposes CRUD operations for the **Establishment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Establishments
    * const establishments = await prisma.establishment.findMany()
    * ```
    */
  get establishment(): Prisma.EstablishmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentServices`: Exposes CRUD operations for the **AppointmentServices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentServices
    * const appointmentServices = await prisma.appointmentServices.findMany()
    * ```
    */
  get appointmentServices(): Prisma.AppointmentServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWorkingHour`: Exposes CRUD operations for the **UserWorkingHour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWorkingHours
    * const userWorkingHours = await prisma.userWorkingHour.findMany()
    * ```
    */
  get userWorkingHour(): Prisma.UserWorkingHourDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Establishment: 'Establishment',
    Service: 'Service',
    Customer: 'Customer',
    Appointment: 'Appointment',
    AppointmentServices: 'AppointmentServices',
    UserWorkingHour: 'UserWorkingHour'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "establishment" | "service" | "customer" | "appointment" | "appointmentServices" | "userWorkingHour"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Establishment: {
        payload: Prisma.$EstablishmentPayload<ExtArgs>
        fields: Prisma.EstablishmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstablishmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstablishmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findFirst: {
            args: Prisma.EstablishmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstablishmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findMany: {
            args: Prisma.EstablishmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          create: {
            args: Prisma.EstablishmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          createMany: {
            args: Prisma.EstablishmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstablishmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          delete: {
            args: Prisma.EstablishmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          update: {
            args: Prisma.EstablishmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          deleteMany: {
            args: Prisma.EstablishmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstablishmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstablishmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          upsert: {
            args: Prisma.EstablishmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          aggregate: {
            args: Prisma.EstablishmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstablishment>
          }
          groupBy: {
            args: Prisma.EstablishmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstablishmentCountArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      AppointmentServices: {
        payload: Prisma.$AppointmentServicesPayload<ExtArgs>
        fields: Prisma.AppointmentServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload>
          }
          findFirst: {
            args: Prisma.AppointmentServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload>
          }
          findMany: {
            args: Prisma.AppointmentServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload>[]
          }
          create: {
            args: Prisma.AppointmentServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload>
          }
          createMany: {
            args: Prisma.AppointmentServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload>[]
          }
          delete: {
            args: Prisma.AppointmentServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload>
          }
          update: {
            args: Prisma.AppointmentServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentServicesPayload>
          }
          aggregate: {
            args: Prisma.AppointmentServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentServices>
          }
          groupBy: {
            args: Prisma.AppointmentServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentServicesCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentServicesCountAggregateOutputType> | number
          }
        }
      }
      UserWorkingHour: {
        payload: Prisma.$UserWorkingHourPayload<ExtArgs>
        fields: Prisma.UserWorkingHourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWorkingHourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWorkingHourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          findFirst: {
            args: Prisma.UserWorkingHourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWorkingHourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          findMany: {
            args: Prisma.UserWorkingHourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>[]
          }
          create: {
            args: Prisma.UserWorkingHourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          createMany: {
            args: Prisma.UserWorkingHourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWorkingHourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>[]
          }
          delete: {
            args: Prisma.UserWorkingHourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          update: {
            args: Prisma.UserWorkingHourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          deleteMany: {
            args: Prisma.UserWorkingHourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWorkingHourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWorkingHourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>[]
          }
          upsert: {
            args: Prisma.UserWorkingHourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          aggregate: {
            args: Prisma.UserWorkingHourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWorkingHour>
          }
          groupBy: {
            args: Prisma.UserWorkingHourGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWorkingHourGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWorkingHourCountArgs<ExtArgs>
            result: $Utils.Optional<UserWorkingHourCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    establishment?: EstablishmentOmit
    service?: ServiceOmit
    customer?: CustomerOmit
    appointment?: AppointmentOmit
    appointmentServices?: AppointmentServicesOmit
    userWorkingHour?: UserWorkingHourOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Appointment: number
    UserWorkingHour: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointment?: boolean | UserCountOutputTypeCountAppointmentArgs
    UserWorkingHour?: boolean | UserCountOutputTypeCountUserWorkingHourArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserWorkingHourArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWorkingHourWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    users: number
    Establishment: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AccountCountOutputTypeCountUsersArgs
    Establishment?: boolean | AccountCountOutputTypeCountEstablishmentArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountEstablishmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
  }


  /**
   * Count Type EstablishmentCountOutputType
   */

  export type EstablishmentCountOutputType = {
    Service: number
    Appointment: number
    UserWorkingHour: number
  }

  export type EstablishmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | EstablishmentCountOutputTypeCountServiceArgs
    Appointment?: boolean | EstablishmentCountOutputTypeCountAppointmentArgs
    UserWorkingHour?: boolean | EstablishmentCountOutputTypeCountUserWorkingHourArgs
  }

  // Custom InputTypes
  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentCountOutputType
     */
    select?: EstablishmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeCountUserWorkingHourArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWorkingHourWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    appointments: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ServiceCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentServicesWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    Appointment: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointment?: boolean | CustomerCountOutputTypeCountAppointmentArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    services: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | AppointmentCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentServicesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    accountId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    accountId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    accountId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    accountId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    accountId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    accountId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    accountId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    Appointment?: boolean | User$AppointmentArgs<ExtArgs>
    UserWorkingHour?: boolean | User$UserWorkingHourArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    accountId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt" | "updatedAt" | "deletedAt" | "accountId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    Appointment?: boolean | User$AppointmentArgs<ExtArgs>
    UserWorkingHour?: boolean | User$UserWorkingHourArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      Appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      UserWorkingHour: Prisma.$UserWorkingHourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
      accountId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Appointment<T extends User$AppointmentArgs<ExtArgs> = {}>(args?: Subset<T, User$AppointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserWorkingHour<T extends User$UserWorkingHourArgs<ExtArgs> = {}>(args?: Subset<T, User$UserWorkingHourArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly accountId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Appointment
   */
  export type User$AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.UserWorkingHour
   */
  export type User$UserWorkingHourArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    where?: UserWorkingHourWhereInput
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    cursor?: UserWorkingHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    name: string
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | Account$usersArgs<ExtArgs>
    Establishment?: boolean | Account$EstablishmentArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Account$usersArgs<ExtArgs>
    Establishment?: boolean | Account$EstablishmentArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      Establishment: Prisma.$EstablishmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Account$usersArgs<ExtArgs> = {}>(args?: Subset<T, Account$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Establishment<T extends Account$EstablishmentArgs<ExtArgs> = {}>(args?: Subset<T, Account$EstablishmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
    readonly deletedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.users
   */
  export type Account$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Account.Establishment
   */
  export type Account$EstablishmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    cursor?: EstablishmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Establishment
   */

  export type AggregateEstablishment = {
    _count: EstablishmentCountAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  export type EstablishmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    number: string | null
    street: string | null
    neighbourhood: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    accountId: string | null
  }

  export type EstablishmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    number: string | null
    street: string | null
    neighbourhood: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    accountId: string | null
  }

  export type EstablishmentCountAggregateOutputType = {
    id: number
    name: number
    number: number
    street: number
    neighbourhood: number
    city: number
    state: number
    country: number
    zipCode: number
    locationLinks: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    accountId: number
    _all: number
  }


  export type EstablishmentMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    street?: true
    neighbourhood?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    accountId?: true
  }

  export type EstablishmentMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    street?: true
    neighbourhood?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    accountId?: true
  }

  export type EstablishmentCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    street?: true
    neighbourhood?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    locationLinks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    accountId?: true
    _all?: true
  }

  export type EstablishmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishment to aggregate.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Establishments
    **/
    _count?: true | EstablishmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstablishmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstablishmentMaxAggregateInputType
  }

  export type GetEstablishmentAggregateType<T extends EstablishmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEstablishment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstablishment[P]>
      : GetScalarType<T[P], AggregateEstablishment[P]>
  }




  export type EstablishmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithAggregationInput | EstablishmentOrderByWithAggregationInput[]
    by: EstablishmentScalarFieldEnum[] | EstablishmentScalarFieldEnum
    having?: EstablishmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstablishmentCountAggregateInputType | true
    _min?: EstablishmentMinAggregateInputType
    _max?: EstablishmentMaxAggregateInputType
  }

  export type EstablishmentGroupByOutputType = {
    id: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks: JsonValue | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    accountId: string
    _count: EstablishmentCountAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  type GetEstablishmentGroupByPayload<T extends EstablishmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstablishmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstablishmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
            : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
        }
      >
    >


  export type EstablishmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    street?: boolean
    neighbourhood?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    locationLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    Service?: boolean | Establishment$ServiceArgs<ExtArgs>
    Appointment?: boolean | Establishment$AppointmentArgs<ExtArgs>
    UserWorkingHour?: boolean | Establishment$UserWorkingHourArgs<ExtArgs>
    _count?: boolean | EstablishmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    street?: boolean
    neighbourhood?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    locationLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    street?: boolean
    neighbourhood?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    locationLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    street?: boolean
    neighbourhood?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    locationLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    accountId?: boolean
  }

  export type EstablishmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "number" | "street" | "neighbourhood" | "city" | "state" | "country" | "zipCode" | "locationLinks" | "createdAt" | "updatedAt" | "deletedAt" | "accountId", ExtArgs["result"]["establishment"]>
  export type EstablishmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    Service?: boolean | Establishment$ServiceArgs<ExtArgs>
    Appointment?: boolean | Establishment$AppointmentArgs<ExtArgs>
    UserWorkingHour?: boolean | Establishment$UserWorkingHourArgs<ExtArgs>
    _count?: boolean | EstablishmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstablishmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type EstablishmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $EstablishmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Establishment"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      Service: Prisma.$ServicePayload<ExtArgs>[]
      Appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      UserWorkingHour: Prisma.$UserWorkingHourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      number: string
      street: string
      neighbourhood: string
      city: string
      state: string
      country: string
      zipCode: string
      locationLinks: Prisma.JsonValue | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
      accountId: string
    }, ExtArgs["result"]["establishment"]>
    composites: {}
  }

  type EstablishmentGetPayload<S extends boolean | null | undefined | EstablishmentDefaultArgs> = $Result.GetResult<Prisma.$EstablishmentPayload, S>

  type EstablishmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstablishmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstablishmentCountAggregateInputType | true
    }

  export interface EstablishmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Establishment'], meta: { name: 'Establishment' } }
    /**
     * Find zero or one Establishment that matches the filter.
     * @param {EstablishmentFindUniqueArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstablishmentFindUniqueArgs>(args: SelectSubset<T, EstablishmentFindUniqueArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Establishment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstablishmentFindUniqueOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstablishmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EstablishmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Establishment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstablishmentFindFirstArgs>(args?: SelectSubset<T, EstablishmentFindFirstArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Establishment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstablishmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EstablishmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Establishments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Establishments
     * const establishments = await prisma.establishment.findMany()
     * 
     * // Get first 10 Establishments
     * const establishments = await prisma.establishment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const establishmentWithIdOnly = await prisma.establishment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstablishmentFindManyArgs>(args?: SelectSubset<T, EstablishmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Establishment.
     * @param {EstablishmentCreateArgs} args - Arguments to create a Establishment.
     * @example
     * // Create one Establishment
     * const Establishment = await prisma.establishment.create({
     *   data: {
     *     // ... data to create a Establishment
     *   }
     * })
     * 
     */
    create<T extends EstablishmentCreateArgs>(args: SelectSubset<T, EstablishmentCreateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Establishments.
     * @param {EstablishmentCreateManyArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstablishmentCreateManyArgs>(args?: SelectSubset<T, EstablishmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Establishments and returns the data saved in the database.
     * @param {EstablishmentCreateManyAndReturnArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Establishments and only return the `id`
     * const establishmentWithIdOnly = await prisma.establishment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstablishmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EstablishmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Establishment.
     * @param {EstablishmentDeleteArgs} args - Arguments to delete one Establishment.
     * @example
     * // Delete one Establishment
     * const Establishment = await prisma.establishment.delete({
     *   where: {
     *     // ... filter to delete one Establishment
     *   }
     * })
     * 
     */
    delete<T extends EstablishmentDeleteArgs>(args: SelectSubset<T, EstablishmentDeleteArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Establishment.
     * @param {EstablishmentUpdateArgs} args - Arguments to update one Establishment.
     * @example
     * // Update one Establishment
     * const establishment = await prisma.establishment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstablishmentUpdateArgs>(args: SelectSubset<T, EstablishmentUpdateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Establishments.
     * @param {EstablishmentDeleteManyArgs} args - Arguments to filter Establishments to delete.
     * @example
     * // Delete a few Establishments
     * const { count } = await prisma.establishment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstablishmentDeleteManyArgs>(args?: SelectSubset<T, EstablishmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Establishments
     * const establishment = await prisma.establishment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstablishmentUpdateManyArgs>(args: SelectSubset<T, EstablishmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Establishments and returns the data updated in the database.
     * @param {EstablishmentUpdateManyAndReturnArgs} args - Arguments to update many Establishments.
     * @example
     * // Update many Establishments
     * const establishment = await prisma.establishment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Establishments and only return the `id`
     * const establishmentWithIdOnly = await prisma.establishment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstablishmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EstablishmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Establishment.
     * @param {EstablishmentUpsertArgs} args - Arguments to update or create a Establishment.
     * @example
     * // Update or create a Establishment
     * const establishment = await prisma.establishment.upsert({
     *   create: {
     *     // ... data to create a Establishment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Establishment we want to update
     *   }
     * })
     */
    upsert<T extends EstablishmentUpsertArgs>(args: SelectSubset<T, EstablishmentUpsertArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentCountArgs} args - Arguments to filter Establishments to count.
     * @example
     * // Count the number of Establishments
     * const count = await prisma.establishment.count({
     *   where: {
     *     // ... the filter for the Establishments we want to count
     *   }
     * })
    **/
    count<T extends EstablishmentCountArgs>(
      args?: Subset<T, EstablishmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstablishmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstablishmentAggregateArgs>(args: Subset<T, EstablishmentAggregateArgs>): Prisma.PrismaPromise<GetEstablishmentAggregateType<T>>

    /**
     * Group by Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstablishmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstablishmentGroupByArgs['orderBy'] }
        : { orderBy?: EstablishmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstablishmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstablishmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Establishment model
   */
  readonly fields: EstablishmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Establishment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstablishmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Service<T extends Establishment$ServiceArgs<ExtArgs> = {}>(args?: Subset<T, Establishment$ServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Appointment<T extends Establishment$AppointmentArgs<ExtArgs> = {}>(args?: Subset<T, Establishment$AppointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserWorkingHour<T extends Establishment$UserWorkingHourArgs<ExtArgs> = {}>(args?: Subset<T, Establishment$UserWorkingHourArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Establishment model
   */
  interface EstablishmentFieldRefs {
    readonly id: FieldRef<"Establishment", 'String'>
    readonly name: FieldRef<"Establishment", 'String'>
    readonly number: FieldRef<"Establishment", 'String'>
    readonly street: FieldRef<"Establishment", 'String'>
    readonly neighbourhood: FieldRef<"Establishment", 'String'>
    readonly city: FieldRef<"Establishment", 'String'>
    readonly state: FieldRef<"Establishment", 'String'>
    readonly country: FieldRef<"Establishment", 'String'>
    readonly zipCode: FieldRef<"Establishment", 'String'>
    readonly locationLinks: FieldRef<"Establishment", 'Json'>
    readonly createdAt: FieldRef<"Establishment", 'DateTime'>
    readonly updatedAt: FieldRef<"Establishment", 'DateTime'>
    readonly deletedAt: FieldRef<"Establishment", 'DateTime'>
    readonly accountId: FieldRef<"Establishment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Establishment findUnique
   */
  export type EstablishmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findUniqueOrThrow
   */
  export type EstablishmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findFirst
   */
  export type EstablishmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findFirstOrThrow
   */
  export type EstablishmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findMany
   */
  export type EstablishmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishments to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment create
   */
  export type EstablishmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Establishment.
     */
    data: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
  }

  /**
   * Establishment createMany
   */
  export type EstablishmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Establishment createManyAndReturn
   */
  export type EstablishmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Establishment update
   */
  export type EstablishmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Establishment.
     */
    data: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
    /**
     * Choose, which Establishment to update.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment updateMany
   */
  export type EstablishmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Establishments.
     */
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyInput>
    /**
     * Filter which Establishments to update
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to update.
     */
    limit?: number
  }

  /**
   * Establishment updateManyAndReturn
   */
  export type EstablishmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * The data used to update Establishments.
     */
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyInput>
    /**
     * Filter which Establishments to update
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Establishment upsert
   */
  export type EstablishmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Establishment to update in case it exists.
     */
    where: EstablishmentWhereUniqueInput
    /**
     * In case the Establishment found by the `where` argument doesn't exist, create a new Establishment with this data.
     */
    create: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
    /**
     * In case the Establishment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
  }

  /**
   * Establishment delete
   */
  export type EstablishmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter which Establishment to delete.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment deleteMany
   */
  export type EstablishmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishments to delete
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to delete.
     */
    limit?: number
  }

  /**
   * Establishment.Service
   */
  export type Establishment$ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Establishment.Appointment
   */
  export type Establishment$AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Establishment.UserWorkingHour
   */
  export type Establishment$UserWorkingHourArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    where?: UserWorkingHourWhereInput
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    cursor?: UserWorkingHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * Establishment without action
   */
  export type EstablishmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: Decimal | null
    durationInMinutes: Decimal | null
  }

  export type ServiceSumAggregateOutputType = {
    price: Decimal | null
    durationInMinutes: Decimal | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    description: string | null
    durationInMinutes: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    establishmentId: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    description: string | null
    durationInMinutes: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    establishmentId: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    durationInMinutes: number
    extraDetails: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    establishmentId: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
    durationInMinutes?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
    durationInMinutes?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    durationInMinutes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    establishmentId?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    durationInMinutes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    establishmentId?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    durationInMinutes?: true
    extraDetails?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    establishmentId?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    price: Decimal
    description: string
    durationInMinutes: Decimal
    extraDetails: JsonValue | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    establishmentId: string
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    durationInMinutes?: boolean
    extraDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishmentId?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    appointments?: boolean | Service$appointmentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    durationInMinutes?: boolean
    extraDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishmentId?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    durationInMinutes?: boolean
    extraDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishmentId?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    durationInMinutes?: boolean
    extraDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishmentId?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "durationInMinutes" | "extraDetails" | "createdAt" | "updatedAt" | "deletedAt" | "establishmentId", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    appointments?: boolean | Service$appointmentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      establishment: Prisma.$EstablishmentPayload<ExtArgs>
      appointments: Prisma.$AppointmentServicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: Prisma.Decimal
      description: string
      durationInMinutes: Prisma.Decimal
      extraDetails: Prisma.JsonValue | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
      establishmentId: string
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    establishment<T extends EstablishmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstablishmentDefaultArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Service$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Decimal'>
    readonly description: FieldRef<"Service", 'String'>
    readonly durationInMinutes: FieldRef<"Service", 'Decimal'>
    readonly extraDetails: FieldRef<"Service", 'Json'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly deletedAt: FieldRef<"Service", 'DateTime'>
    readonly establishmentId: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.appointments
   */
  export type Service$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    where?: AppointmentServicesWhereInput
    orderBy?: AppointmentServicesOrderByWithRelationInput | AppointmentServicesOrderByWithRelationInput[]
    cursor?: AppointmentServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentServicesScalarFieldEnum | AppointmentServicesScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    cpf: string
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Appointment?: boolean | Customer$AppointmentArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointment?: boolean | Customer$AppointmentArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      Appointment: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Appointment<T extends Customer$AppointmentArgs<ExtArgs> = {}>(args?: Subset<T, Customer$AppointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly cpf: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly deletedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.Appointment
   */
  export type Customer$AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    establishmentId: string | null
    customerId: string | null
    userId: string | null
    status: $Enums.Status | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    establishmentId: string | null
    customerId: string | null
    userId: string | null
    status: $Enums.Status | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    establishmentId: number
    customerId: number
    userId: number
    status: number
    date: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    establishmentId?: true
    customerId?: true
    userId?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    establishmentId?: true
    customerId?: true
    userId?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    establishmentId?: true
    customerId?: true
    userId?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    establishmentId: string
    customerId: string
    userId: string
    status: $Enums.Status
    date: Date
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    establishmentId?: boolean
    customerId?: boolean
    userId?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | Appointment$servicesArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    establishmentId?: boolean
    customerId?: boolean
    userId?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    establishmentId?: boolean
    customerId?: boolean
    userId?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    establishmentId?: boolean
    customerId?: boolean
    userId?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "establishmentId" | "customerId" | "userId" | "status" | "date" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | Appointment$servicesArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      establishment: Prisma.$EstablishmentPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      services: Prisma.$AppointmentServicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      establishmentId: string
      customerId: string
      userId: string
      status: $Enums.Status
      date: Date
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    establishment<T extends EstablishmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstablishmentDefaultArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends Appointment$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly establishmentId: FieldRef<"Appointment", 'String'>
    readonly customerId: FieldRef<"Appointment", 'String'>
    readonly userId: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'Status'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly deletedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.services
   */
  export type Appointment$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    where?: AppointmentServicesWhereInput
    orderBy?: AppointmentServicesOrderByWithRelationInput | AppointmentServicesOrderByWithRelationInput[]
    cursor?: AppointmentServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentServicesScalarFieldEnum | AppointmentServicesScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentServices
   */

  export type AggregateAppointmentServices = {
    _count: AppointmentServicesCountAggregateOutputType | null
    _min: AppointmentServicesMinAggregateOutputType | null
    _max: AppointmentServicesMaxAggregateOutputType | null
  }

  export type AppointmentServicesMinAggregateOutputType = {
    appointmentId: string | null
    serviceId: string | null
  }

  export type AppointmentServicesMaxAggregateOutputType = {
    appointmentId: string | null
    serviceId: string | null
  }

  export type AppointmentServicesCountAggregateOutputType = {
    appointmentId: number
    serviceId: number
    _all: number
  }


  export type AppointmentServicesMinAggregateInputType = {
    appointmentId?: true
    serviceId?: true
  }

  export type AppointmentServicesMaxAggregateInputType = {
    appointmentId?: true
    serviceId?: true
  }

  export type AppointmentServicesCountAggregateInputType = {
    appointmentId?: true
    serviceId?: true
    _all?: true
  }

  export type AppointmentServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentServices to aggregate.
     */
    where?: AppointmentServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentServices to fetch.
     */
    orderBy?: AppointmentServicesOrderByWithRelationInput | AppointmentServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentServices
    **/
    _count?: true | AppointmentServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentServicesMaxAggregateInputType
  }

  export type GetAppointmentServicesAggregateType<T extends AppointmentServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentServices[P]>
      : GetScalarType<T[P], AggregateAppointmentServices[P]>
  }




  export type AppointmentServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentServicesWhereInput
    orderBy?: AppointmentServicesOrderByWithAggregationInput | AppointmentServicesOrderByWithAggregationInput[]
    by: AppointmentServicesScalarFieldEnum[] | AppointmentServicesScalarFieldEnum
    having?: AppointmentServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentServicesCountAggregateInputType | true
    _min?: AppointmentServicesMinAggregateInputType
    _max?: AppointmentServicesMaxAggregateInputType
  }

  export type AppointmentServicesGroupByOutputType = {
    appointmentId: string
    serviceId: string
    _count: AppointmentServicesCountAggregateOutputType | null
    _min: AppointmentServicesMinAggregateOutputType | null
    _max: AppointmentServicesMaxAggregateOutputType | null
  }

  type GetAppointmentServicesGroupByPayload<T extends AppointmentServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentServicesGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentServicesGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointmentId?: boolean
    serviceId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentServices"]>

  export type AppointmentServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointmentId?: boolean
    serviceId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentServices"]>

  export type AppointmentServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointmentId?: boolean
    serviceId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentServices"]>

  export type AppointmentServicesSelectScalar = {
    appointmentId?: boolean
    serviceId?: boolean
  }

  export type AppointmentServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"appointmentId" | "serviceId", ExtArgs["result"]["appointmentServices"]>
  export type AppointmentServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type AppointmentServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type AppointmentServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $AppointmentServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentServices"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      appointmentId: string
      serviceId: string
    }, ExtArgs["result"]["appointmentServices"]>
    composites: {}
  }

  type AppointmentServicesGetPayload<S extends boolean | null | undefined | AppointmentServicesDefaultArgs> = $Result.GetResult<Prisma.$AppointmentServicesPayload, S>

  type AppointmentServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentServicesCountAggregateInputType | true
    }

  export interface AppointmentServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentServices'], meta: { name: 'AppointmentServices' } }
    /**
     * Find zero or one AppointmentServices that matches the filter.
     * @param {AppointmentServicesFindUniqueArgs} args - Arguments to find a AppointmentServices
     * @example
     * // Get one AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentServicesFindUniqueArgs>(args: SelectSubset<T, AppointmentServicesFindUniqueArgs<ExtArgs>>): Prisma__AppointmentServicesClient<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentServices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentServicesFindUniqueOrThrowArgs} args - Arguments to find a AppointmentServices
     * @example
     * // Get one AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentServicesClient<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentServicesFindFirstArgs} args - Arguments to find a AppointmentServices
     * @example
     * // Get one AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentServicesFindFirstArgs>(args?: SelectSubset<T, AppointmentServicesFindFirstArgs<ExtArgs>>): Prisma__AppointmentServicesClient<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentServices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentServicesFindFirstOrThrowArgs} args - Arguments to find a AppointmentServices
     * @example
     * // Get one AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentServicesClient<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.findMany()
     * 
     * // Get first 10 AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.findMany({ take: 10 })
     * 
     * // Only select the `appointmentId`
     * const appointmentServicesWithAppointmentIdOnly = await prisma.appointmentServices.findMany({ select: { appointmentId: true } })
     * 
     */
    findMany<T extends AppointmentServicesFindManyArgs>(args?: SelectSubset<T, AppointmentServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentServices.
     * @param {AppointmentServicesCreateArgs} args - Arguments to create a AppointmentServices.
     * @example
     * // Create one AppointmentServices
     * const AppointmentServices = await prisma.appointmentServices.create({
     *   data: {
     *     // ... data to create a AppointmentServices
     *   }
     * })
     * 
     */
    create<T extends AppointmentServicesCreateArgs>(args: SelectSubset<T, AppointmentServicesCreateArgs<ExtArgs>>): Prisma__AppointmentServicesClient<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentServices.
     * @param {AppointmentServicesCreateManyArgs} args - Arguments to create many AppointmentServices.
     * @example
     * // Create many AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentServicesCreateManyArgs>(args?: SelectSubset<T, AppointmentServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppointmentServices and returns the data saved in the database.
     * @param {AppointmentServicesCreateManyAndReturnArgs} args - Arguments to create many AppointmentServices.
     * @example
     * // Create many AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppointmentServices and only return the `appointmentId`
     * const appointmentServicesWithAppointmentIdOnly = await prisma.appointmentServices.createManyAndReturn({
     *   select: { appointmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppointmentServices.
     * @param {AppointmentServicesDeleteArgs} args - Arguments to delete one AppointmentServices.
     * @example
     * // Delete one AppointmentServices
     * const AppointmentServices = await prisma.appointmentServices.delete({
     *   where: {
     *     // ... filter to delete one AppointmentServices
     *   }
     * })
     * 
     */
    delete<T extends AppointmentServicesDeleteArgs>(args: SelectSubset<T, AppointmentServicesDeleteArgs<ExtArgs>>): Prisma__AppointmentServicesClient<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentServices.
     * @param {AppointmentServicesUpdateArgs} args - Arguments to update one AppointmentServices.
     * @example
     * // Update one AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentServicesUpdateArgs>(args: SelectSubset<T, AppointmentServicesUpdateArgs<ExtArgs>>): Prisma__AppointmentServicesClient<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentServices.
     * @param {AppointmentServicesDeleteManyArgs} args - Arguments to filter AppointmentServices to delete.
     * @example
     * // Delete a few AppointmentServices
     * const { count } = await prisma.appointmentServices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentServicesDeleteManyArgs>(args?: SelectSubset<T, AppointmentServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentServicesUpdateManyArgs>(args: SelectSubset<T, AppointmentServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentServices and returns the data updated in the database.
     * @param {AppointmentServicesUpdateManyAndReturnArgs} args - Arguments to update many AppointmentServices.
     * @example
     * // Update many AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppointmentServices and only return the `appointmentId`
     * const appointmentServicesWithAppointmentIdOnly = await prisma.appointmentServices.updateManyAndReturn({
     *   select: { appointmentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppointmentServices.
     * @param {AppointmentServicesUpsertArgs} args - Arguments to update or create a AppointmentServices.
     * @example
     * // Update or create a AppointmentServices
     * const appointmentServices = await prisma.appointmentServices.upsert({
     *   create: {
     *     // ... data to create a AppointmentServices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentServices we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentServicesUpsertArgs>(args: SelectSubset<T, AppointmentServicesUpsertArgs<ExtArgs>>): Prisma__AppointmentServicesClient<$Result.GetResult<Prisma.$AppointmentServicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentServicesCountArgs} args - Arguments to filter AppointmentServices to count.
     * @example
     * // Count the number of AppointmentServices
     * const count = await prisma.appointmentServices.count({
     *   where: {
     *     // ... the filter for the AppointmentServices we want to count
     *   }
     * })
    **/
    count<T extends AppointmentServicesCountArgs>(
      args?: Subset<T, AppointmentServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentServicesAggregateArgs>(args: Subset<T, AppointmentServicesAggregateArgs>): Prisma.PrismaPromise<GetAppointmentServicesAggregateType<T>>

    /**
     * Group by AppointmentServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentServicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentServicesGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentServicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentServices model
   */
  readonly fields: AppointmentServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentServices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppointmentServices model
   */
  interface AppointmentServicesFieldRefs {
    readonly appointmentId: FieldRef<"AppointmentServices", 'String'>
    readonly serviceId: FieldRef<"AppointmentServices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentServices findUnique
   */
  export type AppointmentServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentServices to fetch.
     */
    where: AppointmentServicesWhereUniqueInput
  }

  /**
   * AppointmentServices findUniqueOrThrow
   */
  export type AppointmentServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentServices to fetch.
     */
    where: AppointmentServicesWhereUniqueInput
  }

  /**
   * AppointmentServices findFirst
   */
  export type AppointmentServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentServices to fetch.
     */
    where?: AppointmentServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentServices to fetch.
     */
    orderBy?: AppointmentServicesOrderByWithRelationInput | AppointmentServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentServices.
     */
    cursor?: AppointmentServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentServices.
     */
    distinct?: AppointmentServicesScalarFieldEnum | AppointmentServicesScalarFieldEnum[]
  }

  /**
   * AppointmentServices findFirstOrThrow
   */
  export type AppointmentServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentServices to fetch.
     */
    where?: AppointmentServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentServices to fetch.
     */
    orderBy?: AppointmentServicesOrderByWithRelationInput | AppointmentServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentServices.
     */
    cursor?: AppointmentServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentServices.
     */
    distinct?: AppointmentServicesScalarFieldEnum | AppointmentServicesScalarFieldEnum[]
  }

  /**
   * AppointmentServices findMany
   */
  export type AppointmentServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentServices to fetch.
     */
    where?: AppointmentServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentServices to fetch.
     */
    orderBy?: AppointmentServicesOrderByWithRelationInput | AppointmentServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentServices.
     */
    cursor?: AppointmentServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentServices.
     */
    skip?: number
    distinct?: AppointmentServicesScalarFieldEnum | AppointmentServicesScalarFieldEnum[]
  }

  /**
   * AppointmentServices create
   */
  export type AppointmentServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentServices.
     */
    data: XOR<AppointmentServicesCreateInput, AppointmentServicesUncheckedCreateInput>
  }

  /**
   * AppointmentServices createMany
   */
  export type AppointmentServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentServices.
     */
    data: AppointmentServicesCreateManyInput | AppointmentServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentServices createManyAndReturn
   */
  export type AppointmentServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * The data used to create many AppointmentServices.
     */
    data: AppointmentServicesCreateManyInput | AppointmentServicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointmentServices update
   */
  export type AppointmentServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentServices.
     */
    data: XOR<AppointmentServicesUpdateInput, AppointmentServicesUncheckedUpdateInput>
    /**
     * Choose, which AppointmentServices to update.
     */
    where: AppointmentServicesWhereUniqueInput
  }

  /**
   * AppointmentServices updateMany
   */
  export type AppointmentServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentServices.
     */
    data: XOR<AppointmentServicesUpdateManyMutationInput, AppointmentServicesUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentServices to update
     */
    where?: AppointmentServicesWhereInput
    /**
     * Limit how many AppointmentServices to update.
     */
    limit?: number
  }

  /**
   * AppointmentServices updateManyAndReturn
   */
  export type AppointmentServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * The data used to update AppointmentServices.
     */
    data: XOR<AppointmentServicesUpdateManyMutationInput, AppointmentServicesUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentServices to update
     */
    where?: AppointmentServicesWhereInput
    /**
     * Limit how many AppointmentServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointmentServices upsert
   */
  export type AppointmentServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentServices to update in case it exists.
     */
    where: AppointmentServicesWhereUniqueInput
    /**
     * In case the AppointmentServices found by the `where` argument doesn't exist, create a new AppointmentServices with this data.
     */
    create: XOR<AppointmentServicesCreateInput, AppointmentServicesUncheckedCreateInput>
    /**
     * In case the AppointmentServices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentServicesUpdateInput, AppointmentServicesUncheckedUpdateInput>
  }

  /**
   * AppointmentServices delete
   */
  export type AppointmentServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
    /**
     * Filter which AppointmentServices to delete.
     */
    where: AppointmentServicesWhereUniqueInput
  }

  /**
   * AppointmentServices deleteMany
   */
  export type AppointmentServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentServices to delete
     */
    where?: AppointmentServicesWhereInput
    /**
     * Limit how many AppointmentServices to delete.
     */
    limit?: number
  }

  /**
   * AppointmentServices without action
   */
  export type AppointmentServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentServices
     */
    select?: AppointmentServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentServices
     */
    omit?: AppointmentServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentServicesInclude<ExtArgs> | null
  }


  /**
   * Model UserWorkingHour
   */

  export type AggregateUserWorkingHour = {
    _count: UserWorkingHourCountAggregateOutputType | null
    _min: UserWorkingHourMinAggregateOutputType | null
    _max: UserWorkingHourMaxAggregateOutputType | null
  }

  export type UserWorkingHourMinAggregateOutputType = {
    id: string | null
    establishmentId: string | null
    userId: string | null
    weekday: $Enums.Weekday | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserWorkingHourMaxAggregateOutputType = {
    id: string | null
    establishmentId: string | null
    userId: string | null
    weekday: $Enums.Weekday | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserWorkingHourCountAggregateOutputType = {
    id: number
    establishmentId: number
    userId: number
    weekday: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserWorkingHourMinAggregateInputType = {
    id?: true
    establishmentId?: true
    userId?: true
    weekday?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserWorkingHourMaxAggregateInputType = {
    id?: true
    establishmentId?: true
    userId?: true
    weekday?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserWorkingHourCountAggregateInputType = {
    id?: true
    establishmentId?: true
    userId?: true
    weekday?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserWorkingHourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWorkingHour to aggregate.
     */
    where?: UserWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkingHours to fetch.
     */
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWorkingHours
    **/
    _count?: true | UserWorkingHourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWorkingHourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWorkingHourMaxAggregateInputType
  }

  export type GetUserWorkingHourAggregateType<T extends UserWorkingHourAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWorkingHour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWorkingHour[P]>
      : GetScalarType<T[P], AggregateUserWorkingHour[P]>
  }




  export type UserWorkingHourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWorkingHourWhereInput
    orderBy?: UserWorkingHourOrderByWithAggregationInput | UserWorkingHourOrderByWithAggregationInput[]
    by: UserWorkingHourScalarFieldEnum[] | UserWorkingHourScalarFieldEnum
    having?: UserWorkingHourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWorkingHourCountAggregateInputType | true
    _min?: UserWorkingHourMinAggregateInputType
    _max?: UserWorkingHourMaxAggregateInputType
  }

  export type UserWorkingHourGroupByOutputType = {
    id: string
    establishmentId: string
    userId: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UserWorkingHourCountAggregateOutputType | null
    _min: UserWorkingHourMinAggregateOutputType | null
    _max: UserWorkingHourMaxAggregateOutputType | null
  }

  type GetUserWorkingHourGroupByPayload<T extends UserWorkingHourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWorkingHourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWorkingHourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWorkingHourGroupByOutputType[P]>
            : GetScalarType<T[P], UserWorkingHourGroupByOutputType[P]>
        }
      >
    >


  export type UserWorkingHourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    establishmentId?: boolean
    userId?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWorkingHour"]>

  export type UserWorkingHourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    establishmentId?: boolean
    userId?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWorkingHour"]>

  export type UserWorkingHourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    establishmentId?: boolean
    userId?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWorkingHour"]>

  export type UserWorkingHourSelectScalar = {
    id?: boolean
    establishmentId?: boolean
    userId?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserWorkingHourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "establishmentId" | "userId" | "weekday" | "startTime" | "endTime" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["userWorkingHour"]>
  export type UserWorkingHourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserWorkingHourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserWorkingHourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserWorkingHourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWorkingHour"
    objects: {
      establishment: Prisma.$EstablishmentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      establishmentId: string
      userId: string
      weekday: $Enums.Weekday
      startTime: string
      endTime: string
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["userWorkingHour"]>
    composites: {}
  }

  type UserWorkingHourGetPayload<S extends boolean | null | undefined | UserWorkingHourDefaultArgs> = $Result.GetResult<Prisma.$UserWorkingHourPayload, S>

  type UserWorkingHourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWorkingHourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWorkingHourCountAggregateInputType | true
    }

  export interface UserWorkingHourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWorkingHour'], meta: { name: 'UserWorkingHour' } }
    /**
     * Find zero or one UserWorkingHour that matches the filter.
     * @param {UserWorkingHourFindUniqueArgs} args - Arguments to find a UserWorkingHour
     * @example
     * // Get one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWorkingHourFindUniqueArgs>(args: SelectSubset<T, UserWorkingHourFindUniqueArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWorkingHour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWorkingHourFindUniqueOrThrowArgs} args - Arguments to find a UserWorkingHour
     * @example
     * // Get one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWorkingHourFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWorkingHourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWorkingHour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourFindFirstArgs} args - Arguments to find a UserWorkingHour
     * @example
     * // Get one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWorkingHourFindFirstArgs>(args?: SelectSubset<T, UserWorkingHourFindFirstArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWorkingHour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourFindFirstOrThrowArgs} args - Arguments to find a UserWorkingHour
     * @example
     * // Get one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWorkingHourFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWorkingHourFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWorkingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWorkingHours
     * const userWorkingHours = await prisma.userWorkingHour.findMany()
     * 
     * // Get first 10 UserWorkingHours
     * const userWorkingHours = await prisma.userWorkingHour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWorkingHourWithIdOnly = await prisma.userWorkingHour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWorkingHourFindManyArgs>(args?: SelectSubset<T, UserWorkingHourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWorkingHour.
     * @param {UserWorkingHourCreateArgs} args - Arguments to create a UserWorkingHour.
     * @example
     * // Create one UserWorkingHour
     * const UserWorkingHour = await prisma.userWorkingHour.create({
     *   data: {
     *     // ... data to create a UserWorkingHour
     *   }
     * })
     * 
     */
    create<T extends UserWorkingHourCreateArgs>(args: SelectSubset<T, UserWorkingHourCreateArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWorkingHours.
     * @param {UserWorkingHourCreateManyArgs} args - Arguments to create many UserWorkingHours.
     * @example
     * // Create many UserWorkingHours
     * const userWorkingHour = await prisma.userWorkingHour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWorkingHourCreateManyArgs>(args?: SelectSubset<T, UserWorkingHourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWorkingHours and returns the data saved in the database.
     * @param {UserWorkingHourCreateManyAndReturnArgs} args - Arguments to create many UserWorkingHours.
     * @example
     * // Create many UserWorkingHours
     * const userWorkingHour = await prisma.userWorkingHour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWorkingHours and only return the `id`
     * const userWorkingHourWithIdOnly = await prisma.userWorkingHour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWorkingHourCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWorkingHourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWorkingHour.
     * @param {UserWorkingHourDeleteArgs} args - Arguments to delete one UserWorkingHour.
     * @example
     * // Delete one UserWorkingHour
     * const UserWorkingHour = await prisma.userWorkingHour.delete({
     *   where: {
     *     // ... filter to delete one UserWorkingHour
     *   }
     * })
     * 
     */
    delete<T extends UserWorkingHourDeleteArgs>(args: SelectSubset<T, UserWorkingHourDeleteArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWorkingHour.
     * @param {UserWorkingHourUpdateArgs} args - Arguments to update one UserWorkingHour.
     * @example
     * // Update one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWorkingHourUpdateArgs>(args: SelectSubset<T, UserWorkingHourUpdateArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWorkingHours.
     * @param {UserWorkingHourDeleteManyArgs} args - Arguments to filter UserWorkingHours to delete.
     * @example
     * // Delete a few UserWorkingHours
     * const { count } = await prisma.userWorkingHour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWorkingHourDeleteManyArgs>(args?: SelectSubset<T, UserWorkingHourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWorkingHours
     * const userWorkingHour = await prisma.userWorkingHour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWorkingHourUpdateManyArgs>(args: SelectSubset<T, UserWorkingHourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWorkingHours and returns the data updated in the database.
     * @param {UserWorkingHourUpdateManyAndReturnArgs} args - Arguments to update many UserWorkingHours.
     * @example
     * // Update many UserWorkingHours
     * const userWorkingHour = await prisma.userWorkingHour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWorkingHours and only return the `id`
     * const userWorkingHourWithIdOnly = await prisma.userWorkingHour.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserWorkingHourUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWorkingHourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWorkingHour.
     * @param {UserWorkingHourUpsertArgs} args - Arguments to update or create a UserWorkingHour.
     * @example
     * // Update or create a UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.upsert({
     *   create: {
     *     // ... data to create a UserWorkingHour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWorkingHour we want to update
     *   }
     * })
     */
    upsert<T extends UserWorkingHourUpsertArgs>(args: SelectSubset<T, UserWorkingHourUpsertArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourCountArgs} args - Arguments to filter UserWorkingHours to count.
     * @example
     * // Count the number of UserWorkingHours
     * const count = await prisma.userWorkingHour.count({
     *   where: {
     *     // ... the filter for the UserWorkingHours we want to count
     *   }
     * })
    **/
    count<T extends UserWorkingHourCountArgs>(
      args?: Subset<T, UserWorkingHourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWorkingHourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserWorkingHourAggregateArgs>(args: Subset<T, UserWorkingHourAggregateArgs>): Prisma.PrismaPromise<GetUserWorkingHourAggregateType<T>>

    /**
     * Group by UserWorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserWorkingHourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWorkingHourGroupByArgs['orderBy'] }
        : { orderBy?: UserWorkingHourGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserWorkingHourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWorkingHourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWorkingHour model
   */
  readonly fields: UserWorkingHourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWorkingHour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWorkingHourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    establishment<T extends EstablishmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstablishmentDefaultArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserWorkingHour model
   */
  interface UserWorkingHourFieldRefs {
    readonly id: FieldRef<"UserWorkingHour", 'String'>
    readonly establishmentId: FieldRef<"UserWorkingHour", 'String'>
    readonly userId: FieldRef<"UserWorkingHour", 'String'>
    readonly weekday: FieldRef<"UserWorkingHour", 'Weekday'>
    readonly startTime: FieldRef<"UserWorkingHour", 'String'>
    readonly endTime: FieldRef<"UserWorkingHour", 'String'>
    readonly createdAt: FieldRef<"UserWorkingHour", 'DateTime'>
    readonly updatedAt: FieldRef<"UserWorkingHour", 'DateTime'>
    readonly deletedAt: FieldRef<"UserWorkingHour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWorkingHour findUnique
   */
  export type UserWorkingHourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHour to fetch.
     */
    where: UserWorkingHourWhereUniqueInput
  }

  /**
   * UserWorkingHour findUniqueOrThrow
   */
  export type UserWorkingHourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHour to fetch.
     */
    where: UserWorkingHourWhereUniqueInput
  }

  /**
   * UserWorkingHour findFirst
   */
  export type UserWorkingHourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHour to fetch.
     */
    where?: UserWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkingHours to fetch.
     */
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWorkingHours.
     */
    cursor?: UserWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWorkingHours.
     */
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * UserWorkingHour findFirstOrThrow
   */
  export type UserWorkingHourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHour to fetch.
     */
    where?: UserWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkingHours to fetch.
     */
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWorkingHours.
     */
    cursor?: UserWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWorkingHours.
     */
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * UserWorkingHour findMany
   */
  export type UserWorkingHourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHours to fetch.
     */
    where?: UserWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkingHours to fetch.
     */
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWorkingHours.
     */
    cursor?: UserWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkingHours.
     */
    skip?: number
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * UserWorkingHour create
   */
  export type UserWorkingHourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWorkingHour.
     */
    data: XOR<UserWorkingHourCreateInput, UserWorkingHourUncheckedCreateInput>
  }

  /**
   * UserWorkingHour createMany
   */
  export type UserWorkingHourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWorkingHours.
     */
    data: UserWorkingHourCreateManyInput | UserWorkingHourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWorkingHour createManyAndReturn
   */
  export type UserWorkingHourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * The data used to create many UserWorkingHours.
     */
    data: UserWorkingHourCreateManyInput | UserWorkingHourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWorkingHour update
   */
  export type UserWorkingHourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWorkingHour.
     */
    data: XOR<UserWorkingHourUpdateInput, UserWorkingHourUncheckedUpdateInput>
    /**
     * Choose, which UserWorkingHour to update.
     */
    where: UserWorkingHourWhereUniqueInput
  }

  /**
   * UserWorkingHour updateMany
   */
  export type UserWorkingHourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWorkingHours.
     */
    data: XOR<UserWorkingHourUpdateManyMutationInput, UserWorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which UserWorkingHours to update
     */
    where?: UserWorkingHourWhereInput
    /**
     * Limit how many UserWorkingHours to update.
     */
    limit?: number
  }

  /**
   * UserWorkingHour updateManyAndReturn
   */
  export type UserWorkingHourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * The data used to update UserWorkingHours.
     */
    data: XOR<UserWorkingHourUpdateManyMutationInput, UserWorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which UserWorkingHours to update
     */
    where?: UserWorkingHourWhereInput
    /**
     * Limit how many UserWorkingHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWorkingHour upsert
   */
  export type UserWorkingHourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWorkingHour to update in case it exists.
     */
    where: UserWorkingHourWhereUniqueInput
    /**
     * In case the UserWorkingHour found by the `where` argument doesn't exist, create a new UserWorkingHour with this data.
     */
    create: XOR<UserWorkingHourCreateInput, UserWorkingHourUncheckedCreateInput>
    /**
     * In case the UserWorkingHour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWorkingHourUpdateInput, UserWorkingHourUncheckedUpdateInput>
  }

  /**
   * UserWorkingHour delete
   */
  export type UserWorkingHourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter which UserWorkingHour to delete.
     */
    where: UserWorkingHourWhereUniqueInput
  }

  /**
   * UserWorkingHour deleteMany
   */
  export type UserWorkingHourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWorkingHours to delete
     */
    where?: UserWorkingHourWhereInput
    /**
     * Limit how many UserWorkingHours to delete.
     */
    limit?: number
  }

  /**
   * UserWorkingHour without action
   */
  export type UserWorkingHourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    accountId: 'accountId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const EstablishmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    street: 'street',
    neighbourhood: 'neighbourhood',
    city: 'city',
    state: 'state',
    country: 'country',
    zipCode: 'zipCode',
    locationLinks: 'locationLinks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    accountId: 'accountId'
  };

  export type EstablishmentScalarFieldEnum = (typeof EstablishmentScalarFieldEnum)[keyof typeof EstablishmentScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    durationInMinutes: 'durationInMinutes',
    extraDetails: 'extraDetails',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    establishmentId: 'establishmentId'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    establishmentId: 'establishmentId',
    customerId: 'customerId',
    userId: 'userId',
    status: 'status',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const AppointmentServicesScalarFieldEnum: {
    appointmentId: 'appointmentId',
    serviceId: 'serviceId'
  };

  export type AppointmentServicesScalarFieldEnum = (typeof AppointmentServicesScalarFieldEnum)[keyof typeof AppointmentServicesScalarFieldEnum]


  export const UserWorkingHourScalarFieldEnum: {
    id: 'id',
    establishmentId: 'establishmentId',
    userId: 'userId',
    weekday: 'weekday',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserWorkingHourScalarFieldEnum = (typeof UserWorkingHourScalarFieldEnum)[keyof typeof UserWorkingHourScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Weekday'
   */
  export type EnumWeekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weekday'>
    


  /**
   * Reference to a field of type 'Weekday[]'
   */
  export type ListEnumWeekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weekday[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    accountId?: StringFilter<"User"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Appointment?: AppointmentListRelationFilter
    UserWorkingHour?: UserWorkingHourListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
    Appointment?: AppointmentOrderByRelationAggregateInput
    UserWorkingHour?: UserWorkingHourOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    accountId?: StringFilter<"User"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Appointment?: AppointmentListRelationFilter
    UserWorkingHour?: UserWorkingHourListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    accountId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    accountId?: StringWithAggregatesFilter<"User"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    createdAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    users?: UserListRelationFilter
    Establishment?: EstablishmentListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    Establishment?: EstablishmentOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    createdAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    users?: UserListRelationFilter
    Establishment?: EstablishmentListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type EstablishmentWhereInput = {
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    id?: StringFilter<"Establishment"> | string
    name?: StringFilter<"Establishment"> | string
    number?: StringFilter<"Establishment"> | string
    street?: StringFilter<"Establishment"> | string
    neighbourhood?: StringFilter<"Establishment"> | string
    city?: StringFilter<"Establishment"> | string
    state?: StringFilter<"Establishment"> | string
    country?: StringFilter<"Establishment"> | string
    zipCode?: StringFilter<"Establishment"> | string
    locationLinks?: JsonNullableFilter<"Establishment">
    createdAt?: DateTimeNullableFilter<"Establishment"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Establishment"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Establishment"> | Date | string | null
    accountId?: StringFilter<"Establishment"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Service?: ServiceListRelationFilter
    Appointment?: AppointmentListRelationFilter
    UserWorkingHour?: UserWorkingHourListRelationFilter
  }

  export type EstablishmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    street?: SortOrder
    neighbourhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    locationLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
    Service?: ServiceOrderByRelationAggregateInput
    Appointment?: AppointmentOrderByRelationAggregateInput
    UserWorkingHour?: UserWorkingHourOrderByRelationAggregateInput
  }

  export type EstablishmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    name?: StringFilter<"Establishment"> | string
    number?: StringFilter<"Establishment"> | string
    street?: StringFilter<"Establishment"> | string
    neighbourhood?: StringFilter<"Establishment"> | string
    city?: StringFilter<"Establishment"> | string
    state?: StringFilter<"Establishment"> | string
    country?: StringFilter<"Establishment"> | string
    zipCode?: StringFilter<"Establishment"> | string
    locationLinks?: JsonNullableFilter<"Establishment">
    createdAt?: DateTimeNullableFilter<"Establishment"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Establishment"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Establishment"> | Date | string | null
    accountId?: StringFilter<"Establishment"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Service?: ServiceListRelationFilter
    Appointment?: AppointmentListRelationFilter
    UserWorkingHour?: UserWorkingHourListRelationFilter
  }, "id">

  export type EstablishmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    street?: SortOrder
    neighbourhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    locationLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    accountId?: SortOrder
    _count?: EstablishmentCountOrderByAggregateInput
    _max?: EstablishmentMaxOrderByAggregateInput
    _min?: EstablishmentMinOrderByAggregateInput
  }

  export type EstablishmentScalarWhereWithAggregatesInput = {
    AND?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    OR?: EstablishmentScalarWhereWithAggregatesInput[]
    NOT?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Establishment"> | string
    name?: StringWithAggregatesFilter<"Establishment"> | string
    number?: StringWithAggregatesFilter<"Establishment"> | string
    street?: StringWithAggregatesFilter<"Establishment"> | string
    neighbourhood?: StringWithAggregatesFilter<"Establishment"> | string
    city?: StringWithAggregatesFilter<"Establishment"> | string
    state?: StringWithAggregatesFilter<"Establishment"> | string
    country?: StringWithAggregatesFilter<"Establishment"> | string
    zipCode?: StringWithAggregatesFilter<"Establishment"> | string
    locationLinks?: JsonNullableWithAggregatesFilter<"Establishment">
    createdAt?: DateTimeNullableWithAggregatesFilter<"Establishment"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Establishment"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Establishment"> | Date | string | null
    accountId?: StringWithAggregatesFilter<"Establishment"> | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Service"> | string
    durationInMinutes?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    extraDetails?: JsonNullableFilter<"Service">
    createdAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    establishmentId?: StringFilter<"Service"> | string
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
    appointments?: AppointmentServicesListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    durationInMinutes?: SortOrder
    extraDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    establishmentId?: SortOrder
    establishment?: EstablishmentOrderByWithRelationInput
    appointments?: AppointmentServicesOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Service"> | string
    durationInMinutes?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    extraDetails?: JsonNullableFilter<"Service">
    createdAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    establishmentId?: StringFilter<"Service"> | string
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
    appointments?: AppointmentServicesListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    durationInMinutes?: SortOrder
    extraDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    establishmentId?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    price?: DecimalWithAggregatesFilter<"Service"> | Decimal | DecimalJsLike | number | string
    description?: StringWithAggregatesFilter<"Service"> | string
    durationInMinutes?: DecimalWithAggregatesFilter<"Service"> | Decimal | DecimalJsLike | number | string
    extraDetails?: JsonNullableWithAggregatesFilter<"Service">
    createdAt?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
    establishmentId?: StringWithAggregatesFilter<"Service"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    cpf?: StringFilter<"Customer"> | string
    createdAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    Appointment?: AppointmentListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Appointment?: AppointmentOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    createdAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    Appointment?: AppointmentListRelationFilter
  }, "id" | "cpf">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    cpf?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    establishmentId?: StringFilter<"Appointment"> | string
    customerId?: StringFilter<"Appointment"> | string
    userId?: StringFilter<"Appointment"> | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    date?: DateTimeFilter<"Appointment"> | Date | string
    createdAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    services?: AppointmentServicesListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    establishment?: EstablishmentOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    services?: AppointmentServicesOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    establishmentId?: StringFilter<"Appointment"> | string
    customerId?: StringFilter<"Appointment"> | string
    userId?: StringFilter<"Appointment"> | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    date?: DateTimeFilter<"Appointment"> | Date | string
    createdAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    services?: AppointmentServicesListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    establishmentId?: StringWithAggregatesFilter<"Appointment"> | string
    customerId?: StringWithAggregatesFilter<"Appointment"> | string
    userId?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumStatusWithAggregatesFilter<"Appointment"> | $Enums.Status
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
  }

  export type AppointmentServicesWhereInput = {
    AND?: AppointmentServicesWhereInput | AppointmentServicesWhereInput[]
    OR?: AppointmentServicesWhereInput[]
    NOT?: AppointmentServicesWhereInput | AppointmentServicesWhereInput[]
    appointmentId?: StringFilter<"AppointmentServices"> | string
    serviceId?: StringFilter<"AppointmentServices"> | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type AppointmentServicesOrderByWithRelationInput = {
    appointmentId?: SortOrder
    serviceId?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type AppointmentServicesWhereUniqueInput = Prisma.AtLeast<{
    serviceId_appointmentId?: AppointmentServicesServiceIdAppointmentIdCompoundUniqueInput
    AND?: AppointmentServicesWhereInput | AppointmentServicesWhereInput[]
    OR?: AppointmentServicesWhereInput[]
    NOT?: AppointmentServicesWhereInput | AppointmentServicesWhereInput[]
    appointmentId?: StringFilter<"AppointmentServices"> | string
    serviceId?: StringFilter<"AppointmentServices"> | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "serviceId_appointmentId">

  export type AppointmentServicesOrderByWithAggregationInput = {
    appointmentId?: SortOrder
    serviceId?: SortOrder
    _count?: AppointmentServicesCountOrderByAggregateInput
    _max?: AppointmentServicesMaxOrderByAggregateInput
    _min?: AppointmentServicesMinOrderByAggregateInput
  }

  export type AppointmentServicesScalarWhereWithAggregatesInput = {
    AND?: AppointmentServicesScalarWhereWithAggregatesInput | AppointmentServicesScalarWhereWithAggregatesInput[]
    OR?: AppointmentServicesScalarWhereWithAggregatesInput[]
    NOT?: AppointmentServicesScalarWhereWithAggregatesInput | AppointmentServicesScalarWhereWithAggregatesInput[]
    appointmentId?: StringWithAggregatesFilter<"AppointmentServices"> | string
    serviceId?: StringWithAggregatesFilter<"AppointmentServices"> | string
  }

  export type UserWorkingHourWhereInput = {
    AND?: UserWorkingHourWhereInput | UserWorkingHourWhereInput[]
    OR?: UserWorkingHourWhereInput[]
    NOT?: UserWorkingHourWhereInput | UserWorkingHourWhereInput[]
    id?: StringFilter<"UserWorkingHour"> | string
    establishmentId?: StringFilter<"UserWorkingHour"> | string
    userId?: StringFilter<"UserWorkingHour"> | string
    weekday?: EnumWeekdayFilter<"UserWorkingHour"> | $Enums.Weekday
    startTime?: StringFilter<"UserWorkingHour"> | string
    endTime?: StringFilter<"UserWorkingHour"> | string
    createdAt?: DateTimeNullableFilter<"UserWorkingHour"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"UserWorkingHour"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserWorkingHour"> | Date | string | null
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserWorkingHourOrderByWithRelationInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    userId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    establishment?: EstablishmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserWorkingHourWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWorkingHourWhereInput | UserWorkingHourWhereInput[]
    OR?: UserWorkingHourWhereInput[]
    NOT?: UserWorkingHourWhereInput | UserWorkingHourWhereInput[]
    establishmentId?: StringFilter<"UserWorkingHour"> | string
    userId?: StringFilter<"UserWorkingHour"> | string
    weekday?: EnumWeekdayFilter<"UserWorkingHour"> | $Enums.Weekday
    startTime?: StringFilter<"UserWorkingHour"> | string
    endTime?: StringFilter<"UserWorkingHour"> | string
    createdAt?: DateTimeNullableFilter<"UserWorkingHour"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"UserWorkingHour"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserWorkingHour"> | Date | string | null
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserWorkingHourOrderByWithAggregationInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    userId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserWorkingHourCountOrderByAggregateInput
    _max?: UserWorkingHourMaxOrderByAggregateInput
    _min?: UserWorkingHourMinOrderByAggregateInput
  }

  export type UserWorkingHourScalarWhereWithAggregatesInput = {
    AND?: UserWorkingHourScalarWhereWithAggregatesInput | UserWorkingHourScalarWhereWithAggregatesInput[]
    OR?: UserWorkingHourScalarWhereWithAggregatesInput[]
    NOT?: UserWorkingHourScalarWhereWithAggregatesInput | UserWorkingHourScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserWorkingHour"> | string
    establishmentId?: StringWithAggregatesFilter<"UserWorkingHour"> | string
    userId?: StringWithAggregatesFilter<"UserWorkingHour"> | string
    weekday?: EnumWeekdayWithAggregatesFilter<"UserWorkingHour"> | $Enums.Weekday
    startTime?: StringWithAggregatesFilter<"UserWorkingHour"> | string
    endTime?: StringWithAggregatesFilter<"UserWorkingHour"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"UserWorkingHour"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserWorkingHour"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserWorkingHour"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    account: AccountCreateNestedOneWithoutUsersInput
    Appointment?: AppointmentCreateNestedManyWithoutUserInput
    UserWorkingHour?: UserWorkingHourCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    accountId: string
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    UserWorkingHour?: UserWorkingHourUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutUsersNestedInput
    Appointment?: AppointmentUpdateManyWithoutUserNestedInput
    UserWorkingHour?: UserWorkingHourUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    Appointment?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    UserWorkingHour?: UserWorkingHourUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    accountId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutAccountInput
    Establishment?: EstablishmentCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutAccountInput
    Establishment?: EstablishmentUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutAccountNestedInput
    Establishment?: EstablishmentUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutAccountNestedInput
    Establishment?: EstablishmentUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstablishmentCreateInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    account: AccountCreateNestedOneWithoutEstablishmentInput
    Service?: ServiceCreateNestedManyWithoutEstablishmentInput
    Appointment?: AppointmentCreateNestedManyWithoutEstablishmentInput
    UserWorkingHour?: UserWorkingHourCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    accountId: string
    Service?: ServiceUncheckedCreateNestedManyWithoutEstablishmentInput
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutEstablishmentInput
    UserWorkingHour?: UserWorkingHourUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutEstablishmentNestedInput
    Service?: ServiceUpdateManyWithoutEstablishmentNestedInput
    Appointment?: AppointmentUpdateManyWithoutEstablishmentNestedInput
    UserWorkingHour?: UserWorkingHourUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    Service?: ServiceUncheckedUpdateManyWithoutEstablishmentNestedInput
    Appointment?: AppointmentUncheckedUpdateManyWithoutEstablishmentNestedInput
    UserWorkingHour?: UserWorkingHourUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentCreateManyInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    accountId: string
  }

  export type EstablishmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstablishmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    durationInMinutes?: Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishment: EstablishmentCreateNestedOneWithoutServiceInput
    appointments?: AppointmentServicesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    durationInMinutes?: Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishmentId: string
    appointments?: AppointmentServicesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    durationInMinutes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishment?: EstablishmentUpdateOneRequiredWithoutServiceNestedInput
    appointments?: AppointmentServicesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    durationInMinutes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishmentId?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentServicesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    durationInMinutes?: Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishmentId: string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    durationInMinutes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    durationInMinutes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishmentId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Appointment?: AppointmentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Appointment?: AppointmentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Appointment?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentCreateInput = {
    id?: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishment: EstablishmentCreateNestedOneWithoutAppointmentInput
    customer: CustomerCreateNestedOneWithoutAppointmentInput
    user: UserCreateNestedOneWithoutAppointmentInput
    services?: AppointmentServicesCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    establishmentId: string
    customerId: string
    userId: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    services?: AppointmentServicesUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishment?: EstablishmentUpdateOneRequiredWithoutAppointmentNestedInput
    customer?: CustomerUpdateOneRequiredWithoutAppointmentNestedInput
    user?: UserUpdateOneRequiredWithoutAppointmentNestedInput
    services?: AppointmentServicesUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: AppointmentServicesUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    establishmentId: string
    customerId: string
    userId: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentServicesCreateInput = {
    appointment: AppointmentCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentServicesUncheckedCreateInput = {
    appointmentId: string
    serviceId: string
  }

  export type AppointmentServicesUpdateInput = {
    appointment?: AppointmentUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentServicesUncheckedUpdateInput = {
    appointmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentServicesCreateManyInput = {
    appointmentId: string
    serviceId: string
  }

  export type AppointmentServicesUpdateManyMutationInput = {

  }

  export type AppointmentServicesUncheckedUpdateManyInput = {
    appointmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type UserWorkingHourCreateInput = {
    id?: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishment: EstablishmentCreateNestedOneWithoutUserWorkingHourInput
    user: UserCreateNestedOneWithoutUserWorkingHourInput
  }

  export type UserWorkingHourUncheckedCreateInput = {
    id?: string
    establishmentId: string
    userId: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWorkingHourUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishment?: EstablishmentUpdateOneRequiredWithoutUserWorkingHourNestedInput
    user?: UserUpdateOneRequiredWithoutUserWorkingHourNestedInput
  }

  export type UserWorkingHourUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWorkingHourCreateManyInput = {
    id?: string
    establishmentId: string
    userId: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWorkingHourUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWorkingHourUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type UserWorkingHourListRelationFilter = {
    every?: UserWorkingHourWhereInput
    some?: UserWorkingHourWhereInput
    none?: UserWorkingHourWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserWorkingHourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    accountId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    accountId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    accountId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type EstablishmentListRelationFilter = {
    every?: EstablishmentWhereInput
    some?: EstablishmentWhereInput
    none?: EstablishmentWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstablishmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstablishmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    street?: SortOrder
    neighbourhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    locationLinks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    accountId?: SortOrder
  }

  export type EstablishmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    street?: SortOrder
    neighbourhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    accountId?: SortOrder
  }

  export type EstablishmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    street?: SortOrder
    neighbourhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    accountId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EstablishmentScalarRelationFilter = {
    is?: EstablishmentWhereInput
    isNot?: EstablishmentWhereInput
  }

  export type AppointmentServicesListRelationFilter = {
    every?: AppointmentServicesWhereInput
    some?: AppointmentServicesWhereInput
    none?: AppointmentServicesWhereInput
  }

  export type AppointmentServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    durationInMinutes?: SortOrder
    extraDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    establishmentId?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
    durationInMinutes?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    durationInMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    establishmentId?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    durationInMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    establishmentId?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
    durationInMinutes?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type AppointmentServicesServiceIdAppointmentIdCompoundUniqueInput = {
    serviceId: string
    appointmentId: string
  }

  export type AppointmentServicesCountOrderByAggregateInput = {
    appointmentId?: SortOrder
    serviceId?: SortOrder
  }

  export type AppointmentServicesMaxOrderByAggregateInput = {
    appointmentId?: SortOrder
    serviceId?: SortOrder
  }

  export type AppointmentServicesMinOrderByAggregateInput = {
    appointmentId?: SortOrder
    serviceId?: SortOrder
  }

  export type EnumWeekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayFilter<$PrismaModel> | $Enums.Weekday
  }

  export type UserWorkingHourCountOrderByAggregateInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    userId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserWorkingHourMaxOrderByAggregateInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    userId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserWorkingHourMinOrderByAggregateInput = {
    id?: SortOrder
    establishmentId?: SortOrder
    userId?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumWeekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayWithAggregatesFilter<$PrismaModel> | $Enums.Weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekdayFilter<$PrismaModel>
    _max?: NestedEnumWeekdayFilter<$PrismaModel>
  }

  export type AccountCreateNestedOneWithoutUsersInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput
    connect?: AccountWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type UserWorkingHourCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWorkingHourCreateWithoutUserInput, UserWorkingHourUncheckedCreateWithoutUserInput> | UserWorkingHourCreateWithoutUserInput[] | UserWorkingHourUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutUserInput | UserWorkingHourCreateOrConnectWithoutUserInput[]
    createMany?: UserWorkingHourCreateManyUserInputEnvelope
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type UserWorkingHourUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWorkingHourCreateWithoutUserInput, UserWorkingHourUncheckedCreateWithoutUserInput> | UserWorkingHourCreateWithoutUserInput[] | UserWorkingHourUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutUserInput | UserWorkingHourCreateOrConnectWithoutUserInput[]
    createMany?: UserWorkingHourCreateManyUserInputEnvelope
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput
    upsert?: AccountUpsertWithoutUsersInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutUsersInput, AccountUpdateWithoutUsersInput>, AccountUncheckedUpdateWithoutUsersInput>
  }

  export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserWorkingHourUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWorkingHourCreateWithoutUserInput, UserWorkingHourUncheckedCreateWithoutUserInput> | UserWorkingHourCreateWithoutUserInput[] | UserWorkingHourUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutUserInput | UserWorkingHourCreateOrConnectWithoutUserInput[]
    upsert?: UserWorkingHourUpsertWithWhereUniqueWithoutUserInput | UserWorkingHourUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWorkingHourCreateManyUserInputEnvelope
    set?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    disconnect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    delete?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    update?: UserWorkingHourUpdateWithWhereUniqueWithoutUserInput | UserWorkingHourUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWorkingHourUpdateManyWithWhereWithoutUserInput | UserWorkingHourUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserWorkingHourUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWorkingHourCreateWithoutUserInput, UserWorkingHourUncheckedCreateWithoutUserInput> | UserWorkingHourCreateWithoutUserInput[] | UserWorkingHourUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutUserInput | UserWorkingHourCreateOrConnectWithoutUserInput[]
    upsert?: UserWorkingHourUpsertWithWhereUniqueWithoutUserInput | UserWorkingHourUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWorkingHourCreateManyUserInputEnvelope
    set?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    disconnect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    delete?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    update?: UserWorkingHourUpdateWithWhereUniqueWithoutUserInput | UserWorkingHourUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWorkingHourUpdateManyWithWhereWithoutUserInput | UserWorkingHourUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput> | UserCreateWithoutAccountInput[] | UserUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput | UserCreateOrConnectWithoutAccountInput[]
    createMany?: UserCreateManyAccountInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EstablishmentCreateNestedManyWithoutAccountInput = {
    create?: XOR<EstablishmentCreateWithoutAccountInput, EstablishmentUncheckedCreateWithoutAccountInput> | EstablishmentCreateWithoutAccountInput[] | EstablishmentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAccountInput | EstablishmentCreateOrConnectWithoutAccountInput[]
    createMany?: EstablishmentCreateManyAccountInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput> | UserCreateWithoutAccountInput[] | UserUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput | UserCreateOrConnectWithoutAccountInput[]
    createMany?: UserCreateManyAccountInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EstablishmentUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<EstablishmentCreateWithoutAccountInput, EstablishmentUncheckedCreateWithoutAccountInput> | EstablishmentCreateWithoutAccountInput[] | EstablishmentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAccountInput | EstablishmentCreateOrConnectWithoutAccountInput[]
    createMany?: EstablishmentCreateManyAccountInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput> | UserCreateWithoutAccountInput[] | UserUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput | UserCreateOrConnectWithoutAccountInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAccountInput | UserUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: UserCreateManyAccountInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAccountInput | UserUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAccountInput | UserUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EstablishmentUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EstablishmentCreateWithoutAccountInput, EstablishmentUncheckedCreateWithoutAccountInput> | EstablishmentCreateWithoutAccountInput[] | EstablishmentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAccountInput | EstablishmentCreateOrConnectWithoutAccountInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutAccountInput | EstablishmentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EstablishmentCreateManyAccountInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutAccountInput | EstablishmentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutAccountInput | EstablishmentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput> | UserCreateWithoutAccountInput[] | UserUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput | UserCreateOrConnectWithoutAccountInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAccountInput | UserUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: UserCreateManyAccountInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAccountInput | UserUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAccountInput | UserUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EstablishmentUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EstablishmentCreateWithoutAccountInput, EstablishmentUncheckedCreateWithoutAccountInput> | EstablishmentCreateWithoutAccountInput[] | EstablishmentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAccountInput | EstablishmentCreateOrConnectWithoutAccountInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutAccountInput | EstablishmentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EstablishmentCreateManyAccountInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutAccountInput | EstablishmentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutAccountInput | EstablishmentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutEstablishmentInput = {
    create?: XOR<AccountCreateWithoutEstablishmentInput, AccountUncheckedCreateWithoutEstablishmentInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEstablishmentInput
    connect?: AccountWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<ServiceCreateWithoutEstablishmentInput, ServiceUncheckedCreateWithoutEstablishmentInput> | ServiceCreateWithoutEstablishmentInput[] | ServiceUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutEstablishmentInput | ServiceCreateOrConnectWithoutEstablishmentInput[]
    createMany?: ServiceCreateManyEstablishmentInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<AppointmentCreateWithoutEstablishmentInput, AppointmentUncheckedCreateWithoutEstablishmentInput> | AppointmentCreateWithoutEstablishmentInput[] | AppointmentUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutEstablishmentInput | AppointmentCreateOrConnectWithoutEstablishmentInput[]
    createMany?: AppointmentCreateManyEstablishmentInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type UserWorkingHourCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<UserWorkingHourCreateWithoutEstablishmentInput, UserWorkingHourUncheckedCreateWithoutEstablishmentInput> | UserWorkingHourCreateWithoutEstablishmentInput[] | UserWorkingHourUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutEstablishmentInput | UserWorkingHourCreateOrConnectWithoutEstablishmentInput[]
    createMany?: UserWorkingHourCreateManyEstablishmentInputEnvelope
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<ServiceCreateWithoutEstablishmentInput, ServiceUncheckedCreateWithoutEstablishmentInput> | ServiceCreateWithoutEstablishmentInput[] | ServiceUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutEstablishmentInput | ServiceCreateOrConnectWithoutEstablishmentInput[]
    createMany?: ServiceCreateManyEstablishmentInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<AppointmentCreateWithoutEstablishmentInput, AppointmentUncheckedCreateWithoutEstablishmentInput> | AppointmentCreateWithoutEstablishmentInput[] | AppointmentUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutEstablishmentInput | AppointmentCreateOrConnectWithoutEstablishmentInput[]
    createMany?: AppointmentCreateManyEstablishmentInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type UserWorkingHourUncheckedCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<UserWorkingHourCreateWithoutEstablishmentInput, UserWorkingHourUncheckedCreateWithoutEstablishmentInput> | UserWorkingHourCreateWithoutEstablishmentInput[] | UserWorkingHourUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutEstablishmentInput | UserWorkingHourCreateOrConnectWithoutEstablishmentInput[]
    createMany?: UserWorkingHourCreateManyEstablishmentInputEnvelope
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
  }

  export type AccountUpdateOneRequiredWithoutEstablishmentNestedInput = {
    create?: XOR<AccountCreateWithoutEstablishmentInput, AccountUncheckedCreateWithoutEstablishmentInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEstablishmentInput
    upsert?: AccountUpsertWithoutEstablishmentInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutEstablishmentInput, AccountUpdateWithoutEstablishmentInput>, AccountUncheckedUpdateWithoutEstablishmentInput>
  }

  export type ServiceUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<ServiceCreateWithoutEstablishmentInput, ServiceUncheckedCreateWithoutEstablishmentInput> | ServiceCreateWithoutEstablishmentInput[] | ServiceUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutEstablishmentInput | ServiceCreateOrConnectWithoutEstablishmentInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutEstablishmentInput | ServiceUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: ServiceCreateManyEstablishmentInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutEstablishmentInput | ServiceUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutEstablishmentInput | ServiceUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<AppointmentCreateWithoutEstablishmentInput, AppointmentUncheckedCreateWithoutEstablishmentInput> | AppointmentCreateWithoutEstablishmentInput[] | AppointmentUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutEstablishmentInput | AppointmentCreateOrConnectWithoutEstablishmentInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutEstablishmentInput | AppointmentUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: AppointmentCreateManyEstablishmentInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutEstablishmentInput | AppointmentUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutEstablishmentInput | AppointmentUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserWorkingHourUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<UserWorkingHourCreateWithoutEstablishmentInput, UserWorkingHourUncheckedCreateWithoutEstablishmentInput> | UserWorkingHourCreateWithoutEstablishmentInput[] | UserWorkingHourUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutEstablishmentInput | UserWorkingHourCreateOrConnectWithoutEstablishmentInput[]
    upsert?: UserWorkingHourUpsertWithWhereUniqueWithoutEstablishmentInput | UserWorkingHourUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: UserWorkingHourCreateManyEstablishmentInputEnvelope
    set?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    disconnect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    delete?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    update?: UserWorkingHourUpdateWithWhereUniqueWithoutEstablishmentInput | UserWorkingHourUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: UserWorkingHourUpdateManyWithWhereWithoutEstablishmentInput | UserWorkingHourUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<ServiceCreateWithoutEstablishmentInput, ServiceUncheckedCreateWithoutEstablishmentInput> | ServiceCreateWithoutEstablishmentInput[] | ServiceUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutEstablishmentInput | ServiceCreateOrConnectWithoutEstablishmentInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutEstablishmentInput | ServiceUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: ServiceCreateManyEstablishmentInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutEstablishmentInput | ServiceUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutEstablishmentInput | ServiceUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<AppointmentCreateWithoutEstablishmentInput, AppointmentUncheckedCreateWithoutEstablishmentInput> | AppointmentCreateWithoutEstablishmentInput[] | AppointmentUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutEstablishmentInput | AppointmentCreateOrConnectWithoutEstablishmentInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutEstablishmentInput | AppointmentUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: AppointmentCreateManyEstablishmentInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutEstablishmentInput | AppointmentUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutEstablishmentInput | AppointmentUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserWorkingHourUncheckedUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<UserWorkingHourCreateWithoutEstablishmentInput, UserWorkingHourUncheckedCreateWithoutEstablishmentInput> | UserWorkingHourCreateWithoutEstablishmentInput[] | UserWorkingHourUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutEstablishmentInput | UserWorkingHourCreateOrConnectWithoutEstablishmentInput[]
    upsert?: UserWorkingHourUpsertWithWhereUniqueWithoutEstablishmentInput | UserWorkingHourUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: UserWorkingHourCreateManyEstablishmentInputEnvelope
    set?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    disconnect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    delete?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    update?: UserWorkingHourUpdateWithWhereUniqueWithoutEstablishmentInput | UserWorkingHourUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: UserWorkingHourUpdateManyWithWhereWithoutEstablishmentInput | UserWorkingHourUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
  }

  export type EstablishmentCreateNestedOneWithoutServiceInput = {
    create?: XOR<EstablishmentCreateWithoutServiceInput, EstablishmentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutServiceInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type AppointmentServicesCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentServicesCreateWithoutServiceInput, AppointmentServicesUncheckedCreateWithoutServiceInput> | AppointmentServicesCreateWithoutServiceInput[] | AppointmentServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentServicesCreateOrConnectWithoutServiceInput | AppointmentServicesCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentServicesCreateManyServiceInputEnvelope
    connect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
  }

  export type AppointmentServicesUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentServicesCreateWithoutServiceInput, AppointmentServicesUncheckedCreateWithoutServiceInput> | AppointmentServicesCreateWithoutServiceInput[] | AppointmentServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentServicesCreateOrConnectWithoutServiceInput | AppointmentServicesCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentServicesCreateManyServiceInputEnvelope
    connect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EstablishmentUpdateOneRequiredWithoutServiceNestedInput = {
    create?: XOR<EstablishmentCreateWithoutServiceInput, EstablishmentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutServiceInput
    upsert?: EstablishmentUpsertWithoutServiceInput
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutServiceInput, EstablishmentUpdateWithoutServiceInput>, EstablishmentUncheckedUpdateWithoutServiceInput>
  }

  export type AppointmentServicesUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentServicesCreateWithoutServiceInput, AppointmentServicesUncheckedCreateWithoutServiceInput> | AppointmentServicesCreateWithoutServiceInput[] | AppointmentServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentServicesCreateOrConnectWithoutServiceInput | AppointmentServicesCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentServicesUpsertWithWhereUniqueWithoutServiceInput | AppointmentServicesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentServicesCreateManyServiceInputEnvelope
    set?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    disconnect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    delete?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    connect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    update?: AppointmentServicesUpdateWithWhereUniqueWithoutServiceInput | AppointmentServicesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentServicesUpdateManyWithWhereWithoutServiceInput | AppointmentServicesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentServicesScalarWhereInput | AppointmentServicesScalarWhereInput[]
  }

  export type AppointmentServicesUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentServicesCreateWithoutServiceInput, AppointmentServicesUncheckedCreateWithoutServiceInput> | AppointmentServicesCreateWithoutServiceInput[] | AppointmentServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentServicesCreateOrConnectWithoutServiceInput | AppointmentServicesCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentServicesUpsertWithWhereUniqueWithoutServiceInput | AppointmentServicesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentServicesCreateManyServiceInputEnvelope
    set?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    disconnect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    delete?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    connect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    update?: AppointmentServicesUpdateWithWhereUniqueWithoutServiceInput | AppointmentServicesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentServicesUpdateManyWithWhereWithoutServiceInput | AppointmentServicesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentServicesScalarWhereInput | AppointmentServicesScalarWhereInput[]
  }

  export type AppointmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type EstablishmentCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<EstablishmentCreateWithoutAppointmentInput, EstablishmentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAppointmentInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<CustomerCreateWithoutAppointmentInput, CustomerUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppointmentInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentServicesCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<AppointmentServicesCreateWithoutAppointmentInput, AppointmentServicesUncheckedCreateWithoutAppointmentInput> | AppointmentServicesCreateWithoutAppointmentInput[] | AppointmentServicesUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentServicesCreateOrConnectWithoutAppointmentInput | AppointmentServicesCreateOrConnectWithoutAppointmentInput[]
    createMany?: AppointmentServicesCreateManyAppointmentInputEnvelope
    connect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
  }

  export type AppointmentServicesUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<AppointmentServicesCreateWithoutAppointmentInput, AppointmentServicesUncheckedCreateWithoutAppointmentInput> | AppointmentServicesCreateWithoutAppointmentInput[] | AppointmentServicesUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentServicesCreateOrConnectWithoutAppointmentInput | AppointmentServicesCreateOrConnectWithoutAppointmentInput[]
    createMany?: AppointmentServicesCreateManyAppointmentInputEnvelope
    connect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EstablishmentUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<EstablishmentCreateWithoutAppointmentInput, EstablishmentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAppointmentInput
    upsert?: EstablishmentUpsertWithoutAppointmentInput
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutAppointmentInput, EstablishmentUpdateWithoutAppointmentInput>, EstablishmentUncheckedUpdateWithoutAppointmentInput>
  }

  export type CustomerUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<CustomerCreateWithoutAppointmentInput, CustomerUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppointmentInput
    upsert?: CustomerUpsertWithoutAppointmentInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAppointmentInput, CustomerUpdateWithoutAppointmentInput>, CustomerUncheckedUpdateWithoutAppointmentInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentInput
    upsert?: UserUpsertWithoutAppointmentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentInput, UserUpdateWithoutAppointmentInput>, UserUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentServicesUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentServicesCreateWithoutAppointmentInput, AppointmentServicesUncheckedCreateWithoutAppointmentInput> | AppointmentServicesCreateWithoutAppointmentInput[] | AppointmentServicesUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentServicesCreateOrConnectWithoutAppointmentInput | AppointmentServicesCreateOrConnectWithoutAppointmentInput[]
    upsert?: AppointmentServicesUpsertWithWhereUniqueWithoutAppointmentInput | AppointmentServicesUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: AppointmentServicesCreateManyAppointmentInputEnvelope
    set?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    disconnect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    delete?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    connect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    update?: AppointmentServicesUpdateWithWhereUniqueWithoutAppointmentInput | AppointmentServicesUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: AppointmentServicesUpdateManyWithWhereWithoutAppointmentInput | AppointmentServicesUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: AppointmentServicesScalarWhereInput | AppointmentServicesScalarWhereInput[]
  }

  export type AppointmentServicesUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentServicesCreateWithoutAppointmentInput, AppointmentServicesUncheckedCreateWithoutAppointmentInput> | AppointmentServicesCreateWithoutAppointmentInput[] | AppointmentServicesUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentServicesCreateOrConnectWithoutAppointmentInput | AppointmentServicesCreateOrConnectWithoutAppointmentInput[]
    upsert?: AppointmentServicesUpsertWithWhereUniqueWithoutAppointmentInput | AppointmentServicesUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: AppointmentServicesCreateManyAppointmentInputEnvelope
    set?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    disconnect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    delete?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    connect?: AppointmentServicesWhereUniqueInput | AppointmentServicesWhereUniqueInput[]
    update?: AppointmentServicesUpdateWithWhereUniqueWithoutAppointmentInput | AppointmentServicesUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: AppointmentServicesUpdateManyWithWhereWithoutAppointmentInput | AppointmentServicesUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: AppointmentServicesScalarWhereInput | AppointmentServicesScalarWhereInput[]
  }

  export type AppointmentCreateNestedOneWithoutServicesInput = {
    create?: XOR<AppointmentCreateWithoutServicesInput, AppointmentUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutServicesInput
    connect?: AppointmentWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentsInput
    connect?: ServiceWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<AppointmentCreateWithoutServicesInput, AppointmentUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutServicesInput
    upsert?: AppointmentUpsertWithoutServicesInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutServicesInput, AppointmentUpdateWithoutServicesInput>, AppointmentUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentsInput
    upsert?: ServiceUpsertWithoutAppointmentsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAppointmentsInput, ServiceUpdateWithoutAppointmentsInput>, ServiceUncheckedUpdateWithoutAppointmentsInput>
  }

  export type EstablishmentCreateNestedOneWithoutUserWorkingHourInput = {
    create?: XOR<EstablishmentCreateWithoutUserWorkingHourInput, EstablishmentUncheckedCreateWithoutUserWorkingHourInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutUserWorkingHourInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserWorkingHourInput = {
    create?: XOR<UserCreateWithoutUserWorkingHourInput, UserUncheckedCreateWithoutUserWorkingHourInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserWorkingHourInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWeekdayFieldUpdateOperationsInput = {
    set?: $Enums.Weekday
  }

  export type EstablishmentUpdateOneRequiredWithoutUserWorkingHourNestedInput = {
    create?: XOR<EstablishmentCreateWithoutUserWorkingHourInput, EstablishmentUncheckedCreateWithoutUserWorkingHourInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutUserWorkingHourInput
    upsert?: EstablishmentUpsertWithoutUserWorkingHourInput
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutUserWorkingHourInput, EstablishmentUpdateWithoutUserWorkingHourInput>, EstablishmentUncheckedUpdateWithoutUserWorkingHourInput>
  }

  export type UserUpdateOneRequiredWithoutUserWorkingHourNestedInput = {
    create?: XOR<UserCreateWithoutUserWorkingHourInput, UserUncheckedCreateWithoutUserWorkingHourInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserWorkingHourInput
    upsert?: UserUpsertWithoutUserWorkingHourInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserWorkingHourInput, UserUpdateWithoutUserWorkingHourInput>, UserUncheckedUpdateWithoutUserWorkingHourInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumWeekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayFilter<$PrismaModel> | $Enums.Weekday
  }

  export type NestedEnumWeekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayWithAggregatesFilter<$PrismaModel> | $Enums.Weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekdayFilter<$PrismaModel>
    _max?: NestedEnumWeekdayFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Establishment?: EstablishmentCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Establishment?: EstablishmentUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUsersInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
  }

  export type AppointmentCreateWithoutUserInput = {
    id?: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishment: EstablishmentCreateNestedOneWithoutAppointmentInput
    customer: CustomerCreateNestedOneWithoutAppointmentInput
    services?: AppointmentServicesCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: string
    establishmentId: string
    customerId: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    services?: AppointmentServicesUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateManyUserInputEnvelope = {
    data: AppointmentCreateManyUserInput | AppointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserWorkingHourCreateWithoutUserInput = {
    id?: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishment: EstablishmentCreateNestedOneWithoutUserWorkingHourInput
  }

  export type UserWorkingHourUncheckedCreateWithoutUserInput = {
    id?: string
    establishmentId: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWorkingHourCreateOrConnectWithoutUserInput = {
    where: UserWorkingHourWhereUniqueInput
    create: XOR<UserWorkingHourCreateWithoutUserInput, UserWorkingHourUncheckedCreateWithoutUserInput>
  }

  export type UserWorkingHourCreateManyUserInputEnvelope = {
    data: UserWorkingHourCreateManyUserInput | UserWorkingHourCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutUsersInput = {
    update: XOR<AccountUpdateWithoutUsersInput, AccountUncheckedUpdateWithoutUsersInput>
    create: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutUsersInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutUsersInput, AccountUncheckedUpdateWithoutUsersInput>
  }

  export type AccountUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Establishment?: EstablishmentUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Establishment?: EstablishmentUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    establishmentId?: StringFilter<"Appointment"> | string
    customerId?: StringFilter<"Appointment"> | string
    userId?: StringFilter<"Appointment"> | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    date?: DateTimeFilter<"Appointment"> | Date | string
    createdAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
  }

  export type UserWorkingHourUpsertWithWhereUniqueWithoutUserInput = {
    where: UserWorkingHourWhereUniqueInput
    update: XOR<UserWorkingHourUpdateWithoutUserInput, UserWorkingHourUncheckedUpdateWithoutUserInput>
    create: XOR<UserWorkingHourCreateWithoutUserInput, UserWorkingHourUncheckedCreateWithoutUserInput>
  }

  export type UserWorkingHourUpdateWithWhereUniqueWithoutUserInput = {
    where: UserWorkingHourWhereUniqueInput
    data: XOR<UserWorkingHourUpdateWithoutUserInput, UserWorkingHourUncheckedUpdateWithoutUserInput>
  }

  export type UserWorkingHourUpdateManyWithWhereWithoutUserInput = {
    where: UserWorkingHourScalarWhereInput
    data: XOR<UserWorkingHourUpdateManyMutationInput, UserWorkingHourUncheckedUpdateManyWithoutUserInput>
  }

  export type UserWorkingHourScalarWhereInput = {
    AND?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
    OR?: UserWorkingHourScalarWhereInput[]
    NOT?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
    id?: StringFilter<"UserWorkingHour"> | string
    establishmentId?: StringFilter<"UserWorkingHour"> | string
    userId?: StringFilter<"UserWorkingHour"> | string
    weekday?: EnumWeekdayFilter<"UserWorkingHour"> | $Enums.Weekday
    startTime?: StringFilter<"UserWorkingHour"> | string
    endTime?: StringFilter<"UserWorkingHour"> | string
    createdAt?: DateTimeNullableFilter<"UserWorkingHour"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"UserWorkingHour"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserWorkingHour"> | Date | string | null
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Appointment?: AppointmentCreateNestedManyWithoutUserInput
    UserWorkingHour?: UserWorkingHourCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    UserWorkingHour?: UserWorkingHourUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserCreateManyAccountInputEnvelope = {
    data: UserCreateManyAccountInput | UserCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type EstablishmentCreateWithoutAccountInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Service?: ServiceCreateNestedManyWithoutEstablishmentInput
    Appointment?: AppointmentCreateNestedManyWithoutEstablishmentInput
    UserWorkingHour?: UserWorkingHourCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Service?: ServiceUncheckedCreateNestedManyWithoutEstablishmentInput
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutEstablishmentInput
    UserWorkingHour?: UserWorkingHourUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentCreateOrConnectWithoutAccountInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutAccountInput, EstablishmentUncheckedCreateWithoutAccountInput>
  }

  export type EstablishmentCreateManyAccountInputEnvelope = {
    data: EstablishmentCreateManyAccountInput | EstablishmentCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAccountInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAccountInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateManyWithWhereWithoutAccountInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAccountInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    accountId?: StringFilter<"User"> | string
  }

  export type EstablishmentUpsertWithWhereUniqueWithoutAccountInput = {
    where: EstablishmentWhereUniqueInput
    update: XOR<EstablishmentUpdateWithoutAccountInput, EstablishmentUncheckedUpdateWithoutAccountInput>
    create: XOR<EstablishmentCreateWithoutAccountInput, EstablishmentUncheckedCreateWithoutAccountInput>
  }

  export type EstablishmentUpdateWithWhereUniqueWithoutAccountInput = {
    where: EstablishmentWhereUniqueInput
    data: XOR<EstablishmentUpdateWithoutAccountInput, EstablishmentUncheckedUpdateWithoutAccountInput>
  }

  export type EstablishmentUpdateManyWithWhereWithoutAccountInput = {
    where: EstablishmentScalarWhereInput
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyWithoutAccountInput>
  }

  export type EstablishmentScalarWhereInput = {
    AND?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
    OR?: EstablishmentScalarWhereInput[]
    NOT?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
    id?: StringFilter<"Establishment"> | string
    name?: StringFilter<"Establishment"> | string
    number?: StringFilter<"Establishment"> | string
    street?: StringFilter<"Establishment"> | string
    neighbourhood?: StringFilter<"Establishment"> | string
    city?: StringFilter<"Establishment"> | string
    state?: StringFilter<"Establishment"> | string
    country?: StringFilter<"Establishment"> | string
    zipCode?: StringFilter<"Establishment"> | string
    locationLinks?: JsonNullableFilter<"Establishment">
    createdAt?: DateTimeNullableFilter<"Establishment"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Establishment"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Establishment"> | Date | string | null
    accountId?: StringFilter<"Establishment"> | string
  }

  export type AccountCreateWithoutEstablishmentInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutEstablishmentInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutEstablishmentInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutEstablishmentInput, AccountUncheckedCreateWithoutEstablishmentInput>
  }

  export type ServiceCreateWithoutEstablishmentInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    durationInMinutes?: Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    appointments?: AppointmentServicesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutEstablishmentInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    durationInMinutes?: Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    appointments?: AppointmentServicesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutEstablishmentInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutEstablishmentInput, ServiceUncheckedCreateWithoutEstablishmentInput>
  }

  export type ServiceCreateManyEstablishmentInputEnvelope = {
    data: ServiceCreateManyEstablishmentInput | ServiceCreateManyEstablishmentInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutEstablishmentInput = {
    id?: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    customer: CustomerCreateNestedOneWithoutAppointmentInput
    user: UserCreateNestedOneWithoutAppointmentInput
    services?: AppointmentServicesCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutEstablishmentInput = {
    id?: string
    customerId: string
    userId: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    services?: AppointmentServicesUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutEstablishmentInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutEstablishmentInput, AppointmentUncheckedCreateWithoutEstablishmentInput>
  }

  export type AppointmentCreateManyEstablishmentInputEnvelope = {
    data: AppointmentCreateManyEstablishmentInput | AppointmentCreateManyEstablishmentInput[]
    skipDuplicates?: boolean
  }

  export type UserWorkingHourCreateWithoutEstablishmentInput = {
    id?: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserWorkingHourInput
  }

  export type UserWorkingHourUncheckedCreateWithoutEstablishmentInput = {
    id?: string
    userId: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWorkingHourCreateOrConnectWithoutEstablishmentInput = {
    where: UserWorkingHourWhereUniqueInput
    create: XOR<UserWorkingHourCreateWithoutEstablishmentInput, UserWorkingHourUncheckedCreateWithoutEstablishmentInput>
  }

  export type UserWorkingHourCreateManyEstablishmentInputEnvelope = {
    data: UserWorkingHourCreateManyEstablishmentInput | UserWorkingHourCreateManyEstablishmentInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutEstablishmentInput = {
    update: XOR<AccountUpdateWithoutEstablishmentInput, AccountUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<AccountCreateWithoutEstablishmentInput, AccountUncheckedCreateWithoutEstablishmentInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutEstablishmentInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutEstablishmentInput, AccountUncheckedUpdateWithoutEstablishmentInput>
  }

  export type AccountUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ServiceUpsertWithWhereUniqueWithoutEstablishmentInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutEstablishmentInput, ServiceUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<ServiceCreateWithoutEstablishmentInput, ServiceUncheckedCreateWithoutEstablishmentInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutEstablishmentInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutEstablishmentInput, ServiceUncheckedUpdateWithoutEstablishmentInput>
  }

  export type ServiceUpdateManyWithWhereWithoutEstablishmentInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutEstablishmentInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Service"> | string
    durationInMinutes?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    extraDetails?: JsonNullableFilter<"Service">
    createdAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    establishmentId?: StringFilter<"Service"> | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutEstablishmentInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutEstablishmentInput, AppointmentUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<AppointmentCreateWithoutEstablishmentInput, AppointmentUncheckedCreateWithoutEstablishmentInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutEstablishmentInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutEstablishmentInput, AppointmentUncheckedUpdateWithoutEstablishmentInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutEstablishmentInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutEstablishmentInput>
  }

  export type UserWorkingHourUpsertWithWhereUniqueWithoutEstablishmentInput = {
    where: UserWorkingHourWhereUniqueInput
    update: XOR<UserWorkingHourUpdateWithoutEstablishmentInput, UserWorkingHourUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<UserWorkingHourCreateWithoutEstablishmentInput, UserWorkingHourUncheckedCreateWithoutEstablishmentInput>
  }

  export type UserWorkingHourUpdateWithWhereUniqueWithoutEstablishmentInput = {
    where: UserWorkingHourWhereUniqueInput
    data: XOR<UserWorkingHourUpdateWithoutEstablishmentInput, UserWorkingHourUncheckedUpdateWithoutEstablishmentInput>
  }

  export type UserWorkingHourUpdateManyWithWhereWithoutEstablishmentInput = {
    where: UserWorkingHourScalarWhereInput
    data: XOR<UserWorkingHourUpdateManyMutationInput, UserWorkingHourUncheckedUpdateManyWithoutEstablishmentInput>
  }

  export type EstablishmentCreateWithoutServiceInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    account: AccountCreateNestedOneWithoutEstablishmentInput
    Appointment?: AppointmentCreateNestedManyWithoutEstablishmentInput
    UserWorkingHour?: UserWorkingHourCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateWithoutServiceInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    accountId: string
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutEstablishmentInput
    UserWorkingHour?: UserWorkingHourUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentCreateOrConnectWithoutServiceInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutServiceInput, EstablishmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentServicesCreateWithoutServiceInput = {
    appointment: AppointmentCreateNestedOneWithoutServicesInput
  }

  export type AppointmentServicesUncheckedCreateWithoutServiceInput = {
    appointmentId: string
  }

  export type AppointmentServicesCreateOrConnectWithoutServiceInput = {
    where: AppointmentServicesWhereUniqueInput
    create: XOR<AppointmentServicesCreateWithoutServiceInput, AppointmentServicesUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentServicesCreateManyServiceInputEnvelope = {
    data: AppointmentServicesCreateManyServiceInput | AppointmentServicesCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type EstablishmentUpsertWithoutServiceInput = {
    update: XOR<EstablishmentUpdateWithoutServiceInput, EstablishmentUncheckedUpdateWithoutServiceInput>
    create: XOR<EstablishmentCreateWithoutServiceInput, EstablishmentUncheckedCreateWithoutServiceInput>
    where?: EstablishmentWhereInput
  }

  export type EstablishmentUpdateToOneWithWhereWithoutServiceInput = {
    where?: EstablishmentWhereInput
    data: XOR<EstablishmentUpdateWithoutServiceInput, EstablishmentUncheckedUpdateWithoutServiceInput>
  }

  export type EstablishmentUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutEstablishmentNestedInput
    Appointment?: AppointmentUpdateManyWithoutEstablishmentNestedInput
    UserWorkingHour?: UserWorkingHourUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    Appointment?: AppointmentUncheckedUpdateManyWithoutEstablishmentNestedInput
    UserWorkingHour?: UserWorkingHourUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type AppointmentServicesUpsertWithWhereUniqueWithoutServiceInput = {
    where: AppointmentServicesWhereUniqueInput
    update: XOR<AppointmentServicesUpdateWithoutServiceInput, AppointmentServicesUncheckedUpdateWithoutServiceInput>
    create: XOR<AppointmentServicesCreateWithoutServiceInput, AppointmentServicesUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentServicesUpdateWithWhereUniqueWithoutServiceInput = {
    where: AppointmentServicesWhereUniqueInput
    data: XOR<AppointmentServicesUpdateWithoutServiceInput, AppointmentServicesUncheckedUpdateWithoutServiceInput>
  }

  export type AppointmentServicesUpdateManyWithWhereWithoutServiceInput = {
    where: AppointmentServicesScalarWhereInput
    data: XOR<AppointmentServicesUpdateManyMutationInput, AppointmentServicesUncheckedUpdateManyWithoutServiceInput>
  }

  export type AppointmentServicesScalarWhereInput = {
    AND?: AppointmentServicesScalarWhereInput | AppointmentServicesScalarWhereInput[]
    OR?: AppointmentServicesScalarWhereInput[]
    NOT?: AppointmentServicesScalarWhereInput | AppointmentServicesScalarWhereInput[]
    appointmentId?: StringFilter<"AppointmentServices"> | string
    serviceId?: StringFilter<"AppointmentServices"> | string
  }

  export type AppointmentCreateWithoutCustomerInput = {
    id?: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishment: EstablishmentCreateNestedOneWithoutAppointmentInput
    user: UserCreateNestedOneWithoutAppointmentInput
    services?: AppointmentServicesCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutCustomerInput = {
    id?: string
    establishmentId: string
    userId: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    services?: AppointmentServicesUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentCreateManyCustomerInputEnvelope = {
    data: AppointmentCreateManyCustomerInput | AppointmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCustomerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type EstablishmentCreateWithoutAppointmentInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    account: AccountCreateNestedOneWithoutEstablishmentInput
    Service?: ServiceCreateNestedManyWithoutEstablishmentInput
    UserWorkingHour?: UserWorkingHourCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateWithoutAppointmentInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    accountId: string
    Service?: ServiceUncheckedCreateNestedManyWithoutEstablishmentInput
    UserWorkingHour?: UserWorkingHourUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentCreateOrConnectWithoutAppointmentInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutAppointmentInput, EstablishmentUncheckedCreateWithoutAppointmentInput>
  }

  export type CustomerCreateWithoutAppointmentInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CustomerUncheckedCreateWithoutAppointmentInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CustomerCreateOrConnectWithoutAppointmentInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAppointmentInput, CustomerUncheckedCreateWithoutAppointmentInput>
  }

  export type UserCreateWithoutAppointmentInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    account: AccountCreateNestedOneWithoutUsersInput
    UserWorkingHour?: UserWorkingHourCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    accountId: string
    UserWorkingHour?: UserWorkingHourUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentServicesCreateWithoutAppointmentInput = {
    service: ServiceCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentServicesUncheckedCreateWithoutAppointmentInput = {
    serviceId: string
  }

  export type AppointmentServicesCreateOrConnectWithoutAppointmentInput = {
    where: AppointmentServicesWhereUniqueInput
    create: XOR<AppointmentServicesCreateWithoutAppointmentInput, AppointmentServicesUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentServicesCreateManyAppointmentInputEnvelope = {
    data: AppointmentServicesCreateManyAppointmentInput | AppointmentServicesCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type EstablishmentUpsertWithoutAppointmentInput = {
    update: XOR<EstablishmentUpdateWithoutAppointmentInput, EstablishmentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<EstablishmentCreateWithoutAppointmentInput, EstablishmentUncheckedCreateWithoutAppointmentInput>
    where?: EstablishmentWhereInput
  }

  export type EstablishmentUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: EstablishmentWhereInput
    data: XOR<EstablishmentUpdateWithoutAppointmentInput, EstablishmentUncheckedUpdateWithoutAppointmentInput>
  }

  export type EstablishmentUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutEstablishmentNestedInput
    Service?: ServiceUpdateManyWithoutEstablishmentNestedInput
    UserWorkingHour?: UserWorkingHourUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    Service?: ServiceUncheckedUpdateManyWithoutEstablishmentNestedInput
    UserWorkingHour?: UserWorkingHourUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type CustomerUpsertWithoutAppointmentInput = {
    update: XOR<CustomerUpdateWithoutAppointmentInput, CustomerUncheckedUpdateWithoutAppointmentInput>
    create: XOR<CustomerCreateWithoutAppointmentInput, CustomerUncheckedCreateWithoutAppointmentInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAppointmentInput, CustomerUncheckedUpdateWithoutAppointmentInput>
  }

  export type CustomerUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutAppointmentInput = {
    update: XOR<UserUpdateWithoutAppointmentInput, UserUncheckedUpdateWithoutAppointmentInput>
    create: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentInput, UserUncheckedUpdateWithoutAppointmentInput>
  }

  export type UserUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutUsersNestedInput
    UserWorkingHour?: UserWorkingHourUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    UserWorkingHour?: UserWorkingHourUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentServicesUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: AppointmentServicesWhereUniqueInput
    update: XOR<AppointmentServicesUpdateWithoutAppointmentInput, AppointmentServicesUncheckedUpdateWithoutAppointmentInput>
    create: XOR<AppointmentServicesCreateWithoutAppointmentInput, AppointmentServicesUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentServicesUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: AppointmentServicesWhereUniqueInput
    data: XOR<AppointmentServicesUpdateWithoutAppointmentInput, AppointmentServicesUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentServicesUpdateManyWithWhereWithoutAppointmentInput = {
    where: AppointmentServicesScalarWhereInput
    data: XOR<AppointmentServicesUpdateManyMutationInput, AppointmentServicesUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type AppointmentCreateWithoutServicesInput = {
    id?: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishment: EstablishmentCreateNestedOneWithoutAppointmentInput
    customer: CustomerCreateNestedOneWithoutAppointmentInput
    user: UserCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutServicesInput = {
    id?: string
    establishmentId: string
    customerId: string
    userId: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AppointmentCreateOrConnectWithoutServicesInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutServicesInput, AppointmentUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    durationInMinutes?: Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishment: EstablishmentCreateNestedOneWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    durationInMinutes?: Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    establishmentId: string
  }

  export type ServiceCreateOrConnectWithoutAppointmentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
  }

  export type AppointmentUpsertWithoutServicesInput = {
    update: XOR<AppointmentUpdateWithoutServicesInput, AppointmentUncheckedUpdateWithoutServicesInput>
    create: XOR<AppointmentCreateWithoutServicesInput, AppointmentUncheckedCreateWithoutServicesInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutServicesInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutServicesInput, AppointmentUncheckedUpdateWithoutServicesInput>
  }

  export type AppointmentUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishment?: EstablishmentUpdateOneRequiredWithoutAppointmentNestedInput
    customer?: CustomerUpdateOneRequiredWithoutAppointmentNestedInput
    user?: UserUpdateOneRequiredWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceUpsertWithoutAppointmentsInput = {
    update: XOR<ServiceUpdateWithoutAppointmentsInput, ServiceUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAppointmentsInput, ServiceUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ServiceUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    durationInMinutes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishment?: EstablishmentUpdateOneRequiredWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    durationInMinutes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishmentId?: StringFieldUpdateOperationsInput | string
  }

  export type EstablishmentCreateWithoutUserWorkingHourInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    account: AccountCreateNestedOneWithoutEstablishmentInput
    Service?: ServiceCreateNestedManyWithoutEstablishmentInput
    Appointment?: AppointmentCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateWithoutUserWorkingHourInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    accountId: string
    Service?: ServiceUncheckedCreateNestedManyWithoutEstablishmentInput
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentCreateOrConnectWithoutUserWorkingHourInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutUserWorkingHourInput, EstablishmentUncheckedCreateWithoutUserWorkingHourInput>
  }

  export type UserCreateWithoutUserWorkingHourInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    account: AccountCreateNestedOneWithoutUsersInput
    Appointment?: AppointmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserWorkingHourInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    accountId: string
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserWorkingHourInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserWorkingHourInput, UserUncheckedCreateWithoutUserWorkingHourInput>
  }

  export type EstablishmentUpsertWithoutUserWorkingHourInput = {
    update: XOR<EstablishmentUpdateWithoutUserWorkingHourInput, EstablishmentUncheckedUpdateWithoutUserWorkingHourInput>
    create: XOR<EstablishmentCreateWithoutUserWorkingHourInput, EstablishmentUncheckedCreateWithoutUserWorkingHourInput>
    where?: EstablishmentWhereInput
  }

  export type EstablishmentUpdateToOneWithWhereWithoutUserWorkingHourInput = {
    where?: EstablishmentWhereInput
    data: XOR<EstablishmentUpdateWithoutUserWorkingHourInput, EstablishmentUncheckedUpdateWithoutUserWorkingHourInput>
  }

  export type EstablishmentUpdateWithoutUserWorkingHourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutEstablishmentNestedInput
    Service?: ServiceUpdateManyWithoutEstablishmentNestedInput
    Appointment?: AppointmentUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutUserWorkingHourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    Service?: ServiceUncheckedUpdateManyWithoutEstablishmentNestedInput
    Appointment?: AppointmentUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type UserUpsertWithoutUserWorkingHourInput = {
    update: XOR<UserUpdateWithoutUserWorkingHourInput, UserUncheckedUpdateWithoutUserWorkingHourInput>
    create: XOR<UserCreateWithoutUserWorkingHourInput, UserUncheckedCreateWithoutUserWorkingHourInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserWorkingHourInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserWorkingHourInput, UserUncheckedUpdateWithoutUserWorkingHourInput>
  }

  export type UserUpdateWithoutUserWorkingHourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutUsersNestedInput
    Appointment?: AppointmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserWorkingHourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    Appointment?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentCreateManyUserInput = {
    id?: string
    establishmentId: string
    customerId: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWorkingHourCreateManyUserInput = {
    id?: string
    establishmentId: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AppointmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishment?: EstablishmentUpdateOneRequiredWithoutAppointmentNestedInput
    customer?: CustomerUpdateOneRequiredWithoutAppointmentNestedInput
    services?: AppointmentServicesUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: AppointmentServicesUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWorkingHourUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishment?: EstablishmentUpdateOneRequiredWithoutUserWorkingHourNestedInput
  }

  export type UserWorkingHourUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWorkingHourUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyAccountInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type EstablishmentCreateManyAccountInput = {
    id?: string
    name: string
    number: string
    street: string
    neighbourhood: string
    city: string
    state: string
    country: string
    zipCode: string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Appointment?: AppointmentUpdateManyWithoutUserNestedInput
    UserWorkingHour?: UserWorkingHourUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Appointment?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    UserWorkingHour?: UserWorkingHourUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstablishmentUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Service?: ServiceUpdateManyWithoutEstablishmentNestedInput
    Appointment?: AppointmentUpdateManyWithoutEstablishmentNestedInput
    UserWorkingHour?: UserWorkingHourUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Service?: ServiceUncheckedUpdateManyWithoutEstablishmentNestedInput
    Appointment?: AppointmentUncheckedUpdateManyWithoutEstablishmentNestedInput
    UserWorkingHour?: UserWorkingHourUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighbourhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    locationLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceCreateManyEstablishmentInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    durationInMinutes?: Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AppointmentCreateManyEstablishmentInput = {
    id?: string
    customerId: string
    userId: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWorkingHourCreateManyEstablishmentInput = {
    id?: string
    userId: string
    weekday: $Enums.Weekday
    startTime: string
    endTime: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ServiceUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    durationInMinutes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentServicesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    durationInMinutes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentServicesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    durationInMinutes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extraDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutAppointmentNestedInput
    user?: UserUpdateOneRequiredWithoutAppointmentNestedInput
    services?: AppointmentServicesUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: AppointmentServicesUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWorkingHourUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserWorkingHourNestedInput
  }

  export type UserWorkingHourUncheckedUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWorkingHourUncheckedUpdateManyWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentServicesCreateManyServiceInput = {
    appointmentId: string
  }

  export type AppointmentServicesUpdateWithoutServiceInput = {
    appointment?: AppointmentUpdateOneRequiredWithoutServicesNestedInput
  }

  export type AppointmentServicesUncheckedUpdateWithoutServiceInput = {
    appointmentId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentServicesUncheckedUpdateManyWithoutServiceInput = {
    appointmentId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateManyCustomerInput = {
    id?: string
    establishmentId: string
    userId: string
    status: $Enums.Status
    date: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AppointmentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    establishment?: EstablishmentUpdateOneRequiredWithoutAppointmentNestedInput
    user?: UserUpdateOneRequiredWithoutAppointmentNestedInput
    services?: AppointmentServicesUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: AppointmentServicesUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentServicesCreateManyAppointmentInput = {
    serviceId: string
  }

  export type AppointmentServicesUpdateWithoutAppointmentInput = {
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentServicesUncheckedUpdateWithoutAppointmentInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentServicesUncheckedUpdateManyWithoutAppointmentInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}